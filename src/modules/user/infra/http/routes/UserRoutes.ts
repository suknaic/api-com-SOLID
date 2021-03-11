import { Router } from "express";

import { createUserController } from "../controllers/createuser";

const userRouter = Router();

userRouter.post("/user", (request, response) => {
  return createUserController.handle(request, response);
});

export { userRouter };
