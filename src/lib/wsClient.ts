// singleton websocket client

let socket: WebSocket | null = null;

export const getWsClient = ()=> {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
    }

    socket.onerror = (error)=> {
        console.error("WebSocket error:", error);
    }

    socket.onclose = ()=> {
        console.log("WebSocket closed");
    }

    return socket;
}