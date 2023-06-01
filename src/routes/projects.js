const express = require("express");
const Projectcontroller = require("../controllers/project");

const router = express.Router();

router.get("/", Projectcontroller.getProjects);
router.get("/:id",Projectcontroller.getProjectById)
router.post("/", Projectcontroller.createProject);
router.put("/:id",Projectcontroller.updateProject);
router.delete("/:id", Projectcontroller.deleteProject);

module.exports = router;

//controller.get("/", controller.projects);