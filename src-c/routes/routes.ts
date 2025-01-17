import express from "express";
import controller from "../controllers/controller";

const NAMESPACE = "ROUTES";
const router = express.Router();

router.get("/:dns([a-z0-9-_]{3,64}.i2p)", controller.getDnsFromChain);
router.put(
  "/:dns([A-Za-z0-9-_:]{3,64}.i2p)/:b32([a-z0-9]{52})",
  controller.putDns
);

export = router;
