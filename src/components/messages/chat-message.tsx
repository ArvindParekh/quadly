


export default function ChatMessages() {
    const messages = [
      {
        id: "1",
        sender: "Taylor Kim",
        content: "Hey! I saw we matched on Quadly. I'm also interested in distributed systems!",
        time: "10:30 AM",
        isMine: false,
      },
      {
        id: "2",
        sender: "You",
        content: "Hi Taylor! Yeah, I'm working on a project related to distributed databases right now. What about you?",
        time: "10:32 AM",
        isMine: true,
      },
      {
        id: "3",
        sender: "Taylor Kim",
        content:
          "I'm actually studying consensus algorithms for my research project. Have you read 'Designing Data-Intensive Applications'?",
        time: "10:35 AM",
        isMine: false,
      },
      {
        id: "4",
        sender: "You",
        content:
          "Yes! That's one of my favorite books. Martin Kleppmann explains complex concepts so clearly. I'm on the chapter about distributed transactions right now.",
        time: "10:38 AM",
        isMine: true,
      },
      {
        id: "5",
        sender: "Taylor Kim",
        content:
          "That's a great chapter! Would you be interested in grabbing coffee sometime to discuss? I'm usually free in the afternoons.",
        time: "10:40 AM",
        isMine: false,
      },
      {
        id: "6",
        sender: "You",
        content: "That sounds great! How about tomorrow at 3pm at the campus café?",
        time: "10:45 AM",
        isMine: true,
      },
      {
        id: "7",
        sender: "Taylor Kim",
        content: "Coffee tomorrow at 3pm sounds great! Looking forward to it! 😊",
        time: "10:47 AM",
        isMine: false,
      },
    ]
  
    return (
      <div className="space-y-4">
        <div className="flex justify-center">
          <span className="text-xs bg-pink-500/10 text-pink-500 rounded-full px-2 py-1">Today</span>
        </div>
  
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isMine ? "justify-end" : "justify-start"} gap-2 max-w-[80%] ${
              message.isMine ? "ml-auto" : "mr-auto"
            }`}
          >
            {!message.isMine && (
              <Avatar className="h-8 w-8 mt-1 border border-pink-500/20">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=TK" alt="Taylor Kim" />
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">TK</AvatarFallback>
              </Avatar>
            )}
            <div>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.isMine
                    ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-black"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  