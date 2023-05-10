import { Router } from "express";
import { getCharacters } from "../controllers/public.js";
const router = Router();
router.get("/characters", getCharacters);
router.get("/", (req, res, next) => {
    res.json({ dragonBall: "supaPowerda" });
});
export const charactersRoutes = router;
