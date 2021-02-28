import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

export default routes;
