import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";

const usersRoutes = Router()

usersRoutes.post('/create', new CreateUserController().handle)

export { usersRoutes }