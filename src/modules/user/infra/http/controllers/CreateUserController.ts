import { Request, Response } from "express";
import { CreateUser } from "@modules/user/services/CreateUser";

export class CreateUserController {
  constructor(private CreateUser: CreateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.CreateUser.execulte({
        name,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "unexpected Error",
      });
    }
  }
}
