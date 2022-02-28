import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";


class UsersRepository implements IUsersRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }
    
    
    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    
        const user = this.repository.create({
            name,
            email,
            password
        })

        await this.repository.save(user)

        return user
    }

    async findByEmail(email: string): Promise<User | undefined> {
        
        return this.repository.findOne({ email })
    }

}

export { UsersRepository }