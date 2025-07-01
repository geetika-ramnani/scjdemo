import React, { useRef, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import ChatBubble from "./ChatBubble";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegQuestionCircle } from "react-icons/fa";

const ChatWindow = ({
	onClose,
	messages,
	setMessages,
	input,
	setInput,
	isLoading,
	setIsLoading,
	suggestions,
	setSuggestions,
}) => {
	const chatRef = useRef(null);
	const inputRef = useRef(null);

	// Focus input on open
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	// Scroll to bottom on updates
	useLayoutEffect(() => {
		const timeout = setTimeout(() => {
			chatRef.current?.scrollTo({
				top: chatRef.current.scrollHeight,
				behavior: "smooth",
			});
		}, 100);
		return () => clearTimeout(timeout);
	}, [messages, suggestions, isLoading]);

	// Handle suggestion click
	const handleSuggestionClick = (faq) => {
		setSuggestions([]);
		const userSelection = { sender: "user", text: faq.Question };
		const botReply = { sender: "bot", text: faq.Answer };
		setMessages((prev) => [...prev, userSelection, botReply]);
		// Delay focus slightly so React finishes re-rendering
		setTimeout(() => {
			inputRef.current?.focus();
		}, 100); // 100ms is usually safe
	};

	// Send user message
	const sendMessage = async () => {
		if (!input.trim()) return;

		const userMsg = { sender: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setIsLoading(true);

		try {
			const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ask`, {
				query: userMsg.text,
			});
			const data = res.data;

			const onlyFallback =
				Array.isArray(data) &&
				data.length === 1 &&
				data[0].Answer?.toLowerCase().includes("no relevant answer");

			if (Array.isArray(data) && data.length > 0 && !onlyFallback) {
				setSuggestions(data);
			} else {
				const botMsg = {
					sender: "bot",
					text: "Sorry, I couldn't find anything relevant.",
				};
				setMessages((prev) => [...prev, botMsg]);
			}
		} catch {
			setMessages((prev) => [
				...prev,
				{ sender: "bot", text: "Server error. Try again later." },
			]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 30, scale: 0.95 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="fixed bottom-20 right-4 w-80 h-96 rounded-xl shadow-2xl flex flex-col z-50 bg-gradient-to-br from-black via-gray-900 to-black border border-purple-900/40"
		>
			{/* Header */}
			<div  className="p-3 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white font-semibold rounded-t-xl flex justify-between items-center shadow-md border-b border-purple-700/40">       <span className="text-base tracking-wide">FAQ Assistant</span>
				<button
					onClick={onClose}
					className="text-white text-xl hover:scale-110 transform transition-transform duration-150"
					aria-label="Close chat"
				>
					&times;
				</button>
			</div>

			{/* Messages + Suggestions */}
			<div ref={chatRef} className="flex-1 p-2 overflow-y-auto space-y-2">
				{messages.map((msg, idx) => (
					<motion.div
						key={`msg-${idx}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.25 }}
					>
						<ChatBubble sender={msg.sender} text={msg.text} />
					</motion.div>
				))}

				{suggestions.length > 0 && (
					<motion.div
						key="suggestions-block"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.25 }}
						className="space-y-1"
					>
						<ChatBubble sender="bot" text="Did you mean one of these?" />
						{suggestions.map((item, idx) => (
							<div
								key={`suggestion-${idx}`}
								onClick={() => handleSuggestionClick(item)}
								className="cursor-pointer bg-black/30 backdrop-blur hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white border border-purple-800/40 text-sm px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03]"
							>
								<div className="flex items-start gap-2">
									<FaRegQuestionCircle
										className="text-blue-500 shrink-0 mt-1"
										size={16}
									/>
									<span className="text-sm">{item.Question}</span>
								</div>
							</div>
						))}
					</motion.div>
				)}
			</div>

			{/* Input */}
			<div className="p-2 border-t flex gap-2">
				<input
					ref={inputRef}
					className="flex-1 bg-black/20 text-white placeholder-gray-400 border border-purple-800 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && sendMessage()}
					placeholder="Ask your question..."
					disabled={suggestions.length > 0}
				/>
				<button
					onClick={sendMessage}
					className="bg-purple-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white px-3 py-1 rounded text-sm transition-colors duration-300"
					disabled={suggestions.length > 0}
				>
					Send
				</button>
			</div>
		</motion.div>
	);
};

export default ChatWindow;
