/**
 * Public surface of the chatbot feature. The rest of the app imports only from
 * here (and model/chatService for the API route) — internals stay private.
 */
export { ChatbotView } from "./view/ChatbotView";
export { handleChat } from "./model/chatService";
export type { Quote, ChatMessage } from "./model/types";
