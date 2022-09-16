const router = require("express").Router();

const {getHome,
     postHome, 
     putHome,
    deleteHome} = require("../controllers/home.controllers")



router.get("/", getHome)

router.post("/user", postHome)

router.put("/update", putHome)

router.delete("/user", deleteHome)

module.exports = router;