import { User } from "@modules/user/entities/user";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";

export class TypeormUserRepository implements IUserRepository {
  private users: User[] = [];

  async fyndByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
