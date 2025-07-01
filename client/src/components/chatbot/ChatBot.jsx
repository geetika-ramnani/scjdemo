import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import ChatWindow from "./ChatWindow";
import { AnimatePresence, motion } from "framer-motion";

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Persist chat state
	const [messages, setMessages] = useState([
		{
			sender: "bot",
			text: "👋 Hey there! Need help with something? 🤖",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [suggestions, setSuggestions] = useState([]);

	return (
		<>
			{/* Floating bubble icon with tooltip and animation */}
			<motion.div
				className="fixed bottom-4 right-4 z-50"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
			>
				<div className="relative group">
					{/* Chatbot button */}
					<div
						className=" bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl cursor-pointer
						hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400
						transition duration-300"

						onClick={() => setIsOpen(!isOpen)}
					>
						<FaCommentDots size={27} />
					</div>

					{/* Speech bubble appears above-left */}
					{!isOpen && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="absolute -top-15 -left-35 flex flex-col items-start group-hover:opacity-100 opacity-90"
						>
							<div className="bg-gradient-to-br from-purple-900/70 via-purple-800/50 to-transparent text-white text-md px-2 py-2 rounded-xl shadow-lg relative max-w-[220px]">
								👋 Need help? I’m here!
								{/* Tail */}
								<div className="absolute -bottom-2 right-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-800/50"></div>
							</div>
						</motion.div>

					)}
				</div>
			</motion.div>

			{/* AnimatePresence wraps conditional render */}
			<AnimatePresence mode="wait">
				{isOpen && (
					<ChatWindow
						key="chat"
						onClose={() => setIsOpen(false)}
						{...{
							messages,
								setMessages,
								suggestions,
								setSuggestions,
								input,
								setInput,
								isLoading,
								setIsLoading,
						}}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default ChatBot;
