const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

//! for adding a project (not part of the current scope 6/25/24)
//! !!!remember to put "addProject" in the module.exports below when uncommented!!!
// const addProject = async (req, res) => {
//   const { id, name, creator, people, description, image, collected } = req.body;

//   try {
//     const project = new Project({ id, name, creator, people, description, image, collected });
//     await project.save();
//     res.status(201).json({ message: "Project created", farm });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding project", error });
//   }
// };

module.exports = { getProjects };
