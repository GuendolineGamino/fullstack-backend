const express = require("express");
const Projectcontroller = require("../controllers/project");

const router = express.Router();

router.get("/", Projectcontroller.getProjects);
router.get("/:id",Projectcontroller.getProjectById)
router.post("/", Projectcontroller.createProject);


module.exports = router;

//controller.get("/", controller.projects);