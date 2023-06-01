const Chance = require("chance");

//what we want to test
const Projectcontroller = require("../project");

//dependencies
const ProjectService = require("../../services/projects");

const chance = new Chance();

//Mock dependencies
jest.mock("../../services/projects");


describe("when calling update project controller", () => {
    let id, projectData, updatedProject, req, res;

    beforeEach(()=> {
        id = chance.guid();
        projectData ={
            name: chance.name(),
            description: chance.string(),
        };

        updatedProject = projectData;
        req = {
            params:{id}, 
            body: projectData, 
        };

        res={
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
        //global.console = {log: jest.fn(), error }

        ProjectService.updateProject = jest.fn().mockResolvedValue(updatedProject);
    });


    it("Should call ProjectService.updateProject with the id and projectData", async() =>{
        //ACT
        await Projectcontroller.updateProject(req, res);

        //ASSERT
        expect(ProjectService.updateProject).toHaveBeenCalledWith(id, projectData);

    });
    
    it("should call res.status with a 200 status code", async ()=>{
        await Projectcontroller.updateProject(req,res);

        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("should call res.json with the updated project data", async () =>{
        await Projectcontroller.updateProject(req,res);

        expect(res.json).toHaveBeenCalledWith(updatedProject);
    });

    it("should call res.status with 500 when the projectService.updateproject service fails", async () =>{
        //Arrange
        const error = new Error();

        ProjectService.updateProject = jest.fn().mockRejectedValue(error);

        //Act
        await Projectcontroller.updateProject(req, res);

        //assert
        expect(res.status).toHaveBeenCalledWith(500);
        

    });
});



