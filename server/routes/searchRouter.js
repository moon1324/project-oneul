import express from "express";
import { searchKeyword } from "../controller/search/search.js";
import { authenticateToken } from "../controller/search/authenticateToken.js";

const searchRouter = express.Router();

// searchRouter.get("/", authenticateToken, searchKeyword);
searchRouter.get("/", searchKeyword);

export default searchRouter;
