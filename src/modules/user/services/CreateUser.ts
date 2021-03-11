import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { IMailProvider } from "@shared/providers/IMailProvider";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";

export class CreateUser {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execulte(data: ICreateUserDTO) {
    const userAlredyExists = await this.userRepository.fyndByEmail(data.email);

    if (userAlredyExists) {
      throw new Error("User alredy exists");
    }

    const user = new User(data);

    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: { name: data.name, email: data.email },
      from: { name: "equipe meu app", email: "equipe@meuapp.com" },
      subject: "Seja bem vindo a platforma ",
      body: "<p> Voce ja pode fazer login na platforma </p>",
    });
  }
}

// [S]ingle Responsability principle
// the service CreateUser tem a unica responsabilidade de criar usuario

//[L]iskov substitution principle
// a parti do momento que estou rebendo a interface IUserRepository
// ou seja o contrato de quais funcionalidade (metodos) deve existir
// nao interesa qual tipo de infraestrutura vai ser usada desde que
// siga o contrato

//[D]ependency inversion principle
// nao estou depende diretamente da implementacao do repositorio para salvar o usuario
// ele faz uso de uma interface que abstrai os metodos que seram usado para salvar o usuario
