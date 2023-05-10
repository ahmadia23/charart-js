import { Router } from "express";
import { getCharacters } from "../controllers/public.js";
const router = Router();
router.get("/", (req, res, next) => {
    res.json({ dragonBall: "supaPowerda" });
});
router.get("/characters", getCharacters);
export const charactersRoutes = router;
