const ChatBubble = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {/* renders separate chatbubbles for user and bot messages */}
      <div
        className={`px-4 py-2 rounded-xl max-w-[75%] text-sm leading-relaxed shadow-md
          ${
            isUser
              ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
              : "bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-transparent text-white border border-purple-800/40"
          }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
