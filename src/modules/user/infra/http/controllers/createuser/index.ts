import { TypeormUserRepository } from "@modules/user/infra/typeorm/repositories/TyperormUserRepository";
import { CreateUser } from "@modules/user/services/CreateUser";
import { MailTrapMailProvider } from "@shared/providers/implementations/MailTrapMailProvider";
import { CreateUserController } from "./CreateUserController";

const userRepository = new TypeormUserRepository();
const Mailtrap = new MailTrapMailProvider();

const createUSer = new CreateUser(userRepository, Mailtrap);

const createUserController = new CreateUserController(createUSer);

export { createUserController };
