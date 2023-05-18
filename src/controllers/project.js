const ProjectService = require("../services/projects");

exports.getProjects = async (req, res) => {
   try{
    let projects = await ProjectService.getProjects();
    res.json({
        projects: projects,
    });

   }
   catch (err){

    console.error("err", err);
    res.status(500).json({
        message: "Projects were not retrieved",
    });
   }
};

exports.createProject = async(req,res) => {
    try{
        let projectSaved = await ProjectService.createProject(req.body);
        res.status(201).json({
            message: "Project Created",
            projectSaved: projectSaved
        });
    }
    catch (error){
        console.error("err", err);
        res.status(400).json({
            message: "Was not able to create the project",
        })
    }
}


exports.getProjectById = async (req,res) => {
    try {
        let project = await ProjectService.getProjectById(req.params.id);
        
        res.json({
            project:project,
        })
    } catch(err) {
        console.error("err", err);
        res.status(404).json({
            message: "Project not found",
        })
    }
}


