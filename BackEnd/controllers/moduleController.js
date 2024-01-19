const Module = require("../models/Module");
const mongoose = require("mongoose")
const {updateLearningPath} = require("../services/learningPathService");
const LearningPath = require("../models/LearningPath");
const moduleService = require("../services/moduleService")

const getAllModules = async (req, res) => {
  const modules = await Module.find();
  if (!modules) return res.status(400).json({ message: "No Modules found" });

  res.status(200).json(modules);
};

const createModule = async (req, res) => {
  const { name, description, learningPath } = req.body;

  if (!name || !description || !learningPath) {
    return res.status(400).json({ message: "name or description required" });
  }

  try {
    const module = await Module.create({
      name: name,
      description: description,
      learningPath : new mongoose.Types.ObjectId(learningPath)
    });

    console.log(module)
    const data = { module,_id:learningPath }
   const lp = await updateLearningPath(data, res );

   console.log(lp);

    res.status(201).json({ message: "module  created successfully", module }); //created
  } catch (err) {
    console.error(err);
  }
};

const updateModule = async (req, res) => {
  if (!req?.body._id)
    return res.status(400).json({ message: " Module ID is required" });

  const response = await moduleService.updateModule(req.body, res);

  if(response.result){

    res.status(200).json({ message: " Module Updated Successfully", response });
    
}else{

  return;
}

  }


  

const deleteModule = async (req, res) => {
  if (!req.params?.id)
    return res.status(400).json({ message: " Module ID is required" });

  const currentModule = await Module.findOne({ _id: req.params?.id }).exec();

  if (!currentModule) {
    return res
      .status(204)
      .json({ message: `Module with ID ${req.params?.id} not found` });
  }

  const currentLearningPath = await LearningPath.findOne({_id:currentModule.learningPath}).exec();

  if(currentLearningPath){

    const moduleIndex = currentLearningPath.modules.indexOf(currentModule.learningPath);
    currentLearningPath.modules.splice(moduleIndex, 1);
  
    await currentLearningPath.save();

  }


  const result = await currentModule.deleteOne({ _id: req.params?.id });

  res.status(200).json(result);
};

const getModule = async (req, res) => {
  if (!req.params?.id)
    return res.status(400).json({ message: " Module ID is required" });

  const module = await Module.findOne({ _id: req.params?.id }).exec();

  if (!module) {
    return res
      .status(400)
      .json({ message: `Module with id ${req.params.id} not found` });
  }

  res.status(200).json(module);
};

module.exports = {
  getModule,
  getAllModules,
  createModule,
  updateModule,
  deleteModule,
};
