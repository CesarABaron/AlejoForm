const { Router } = require("express");
const { Send } = require("../controllers/SendEmail");

const router = Router();

router.post("/ClientData", Send);

module.exports = router;
