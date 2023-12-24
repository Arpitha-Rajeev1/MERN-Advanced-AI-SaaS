import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chat_controllers.js";
const chatRoutes = Router();
chatRoutes.post('/new', validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRoutes.get('/all_chats', verifyToken, sendChatsToUser);
chatRoutes.delete('/delete', verifyToken, deleteChats);
export default chatRoutes;
//# sourceMappingURL=chat_routes.js.map