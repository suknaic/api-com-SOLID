import { User } from "../entities/user";

export interface IUserRepository {
  fyndByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}

// interface userRepository
// e um contrato que contem os methodos
// que devem ser usadados para salvar um usuario
