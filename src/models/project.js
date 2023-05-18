const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    projectLink:{
        type: String,
    },
    overview:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
    description:{
        type: String,
        required:true,
    },
    tools:{
        type: [{type: String}],
        
    },
    
});
module.exports = mongoose.model("Project", projectSchema);