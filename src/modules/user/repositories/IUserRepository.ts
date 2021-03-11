import { User } from "../entities/user";

export interface IUserRepository {
  fyndByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
