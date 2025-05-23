// WebSocket client with authentication support

let socket: WebSocket | null = null;
let currentToken: string | null = null;

/**
 * Get a WebSocket client instance with authentication
 * @param token Authentication token (typically user email or ID)
 * @returns Promise that resolves to a WebSocket instance
 */
export const getWsClient = async (token: string | null): Promise<WebSocket> => {
    if (!token) {
        throw new Error("Authentication token is required");
    }

    // If we already have a socket with the same token and it's open, reuse it
    if (socket && socket.readyState === WebSocket.OPEN && token === currentToken) {
        return socket;
    }

    // Close any existing socket before creating a new one
    if (socket) {
        try {
            socket.close();
        } catch (error) {
            console.error("Error closing existing WebSocket:", error);
        }
    }

    // Create a new WebSocket connection with the authentication token
    return new Promise((resolve, reject) => {
        try {
            const wsUrl = `${process.env.NEXT_PUBLIC_WS_URL}?token=${encodeURIComponent(token)}`;
            
            socket = new WebSocket(wsUrl);
            currentToken = token;
            
            // Set up event handlers
            socket.onopen = () => {
                console.log("WebSocket connection established");
                resolve(socket as WebSocket);
            };
            
            socket.onerror = (error) => {
                console.error("WebSocket connection error:", error);
                reject(error);
            };
            
            socket.onclose = (event) => {
                console.log(`WebSocket connection closed. Code: ${event.code}, Reason: ${event.reason}`);
                // Clear references on close
                if (socket === socket) {
                    socket = null;
                    currentToken = null;
                }
            };
            
            // Set a connection timeout
            const timeout = setTimeout(() => {
                if (socket && socket.readyState !== WebSocket.OPEN) {
                    socket.close();
                    reject(new Error("WebSocket connection timeout"));
                }
            }, 5000); // 5 second timeout
            
            // Clear the timeout once connected
            socket.addEventListener('open', () => clearTimeout(timeout));
            
        } catch (error) {
            console.error("Failed to create WebSocket:", error);
            reject(error);
        }
    });
};