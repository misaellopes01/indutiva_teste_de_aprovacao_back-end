import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)