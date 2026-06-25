import { handleChat } from "@/features/chatbot/model/chatService";

// All logic lives in the feature; the route is just the delegate.
export async function POST(req: Request): Promise<Response> {
  return handleChat(req);
}
