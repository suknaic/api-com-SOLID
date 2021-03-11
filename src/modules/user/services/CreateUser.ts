import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execulte(data: ICreateUserDTO) {
    const userAlredyExists = await this.userRepository.fyndByEmail(data.email);

    if (userAlredyExists) {
      throw new Error("User alredy exists");
    }

    const user = new User(data);

    await this.userRepository.save(user);
  }
}

// services nao tem ideia de qual tipo de ORM/Database vai ser usado
// ele faz uso de uma interface que contem os metodos para ser usado no servico
//[D]ependency inversion principle
