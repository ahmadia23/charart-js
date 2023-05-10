import { Router } from "express";
import { getCharacters } from "../controllers/public.js";

const router = Router();

router.get("/characters", getCharacters);
router.get("/", (req, res, next) => {
  res.json({ dragonBall: "supaPowerda" });
});

router.post("character");

export const charactersRoutes = router;
