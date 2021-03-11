import { Router } from "express";

import { userRouter } from "@modules/user/infra/http/routes/UserRoutes";

const Routes = Router();

Routes.use(userRouter);

export default Routes;
