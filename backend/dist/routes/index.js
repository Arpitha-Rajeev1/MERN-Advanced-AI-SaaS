import { Router } from "express";
import userRoutes from "./user_routes.js";
import chatRoutes from "./chat_routes.js";
const appRouter = Router();
appRouter.use('/user', userRoutes); // domain/api/v1/user
appRouter.use('/chat', chatRoutes); // domain/api/v1/chat
export default appRouter;
//# sourceMappingURL=index.js.map