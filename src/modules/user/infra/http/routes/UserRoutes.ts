import { Router } from "express";

const userRouter = Router();

userRouter.post("/user", (request, response) => {
  return response.status(201).send();
});

export { userRouter };
