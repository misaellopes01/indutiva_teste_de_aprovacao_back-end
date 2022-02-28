import { Router } from "express";
import { usersRoutes } from "./user.routes";

const router = Router()

router.use('/', usersRoutes)

export { router }