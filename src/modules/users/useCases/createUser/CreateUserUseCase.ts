import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { IUsersRepository } from "../../../../modules/users/repositories/IUsersRepository";
import { User } from "../../../../modules/users/entities/User";
import { AppError } from "../../../../shared/errors/AppError";


interface IRequest{
    name: string
    email: string
    password: string
}

@injectable()
class CreateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}

    async execute({ name, email, password }: IRequest): Promise<User>{

        const userAlreadyExists = this.usersRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError("Users Already Exists!")
        }

        const passwordHashed = await hash(password, 8)

        const user = await this.usersRepository.create({
            name,
            email,
            password: passwordHashed
        })

        return user
    }
}

export { CreateUserUseCase }