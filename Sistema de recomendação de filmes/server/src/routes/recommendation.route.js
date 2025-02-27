import express from "express";
import recommendationController from "../controllers/recommendation.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

// Rota para obter recomendações com base nos favoritos do usuário
router.get("/", tokenMiddleware.auth, recommendationController.getRecommendations);

export default router;
