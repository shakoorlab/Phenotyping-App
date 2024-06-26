const express = require("express");
const { getProjects, addProject } = require("../controllers/projectController");
const router = express.Router();

router.get("/projects", getProjects);
// router.post("/projects", createFarm);

module.exports = router;
