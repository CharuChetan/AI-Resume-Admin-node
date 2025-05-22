const express = require("express");
const UserResumeRelationsController = require("../controllers/userResumeRelationsController.js");
const auth = require("../middleware/auth.js");
const SkillsController = require("../controllers/skillsController.js");
const EducationController = require("../controllers/educationController.js");
const ExperienceController = require("../controllers/experienceController.js");
const UserResumeCmpController = require("../controllers/userResumeCmpController.js");
const UserResumeController = require("../controllers/userResumeController.js");

const router = express.Router();
const userResumeRelationsController = new UserResumeRelationsController();
//UserResumeRelationsController routes
router.get("/user-resumes/auth/:email", (req, res) =>
  userResumeRelationsController.getAuthToken(req, res)
);

router.get("/user-resumes/email/:email", auth, (req, res) =>
  userResumeRelationsController.getAllResume(req, res)
);
router.get("/user-resumes/:id", auth, (req, res) =>
  userResumeRelationsController.getResume(req, res)
);

//UserResumeController routes
const userResumeController = new UserResumeController();
router.get("/user-resumes/:id", auth, (req, res) =>
  userResumeController.getResume(req, res)
);
router.post("/user-resumes", auth, (req, res) => {
  userResumeController.createResume(req, res);
});
router.put("/user-resumes/:id", auth, (req, res) =>
  userResumeController.updateResume(req, res)
);
router.delete("/user-resumes/:id", auth, (req, res) =>
  userResumeController.deleteResume(req, res)
);

//Skill controller routes
const skillsController = new SkillsController();
router.get("/skills/:userResumeId", auth, (req, res) =>
  skillsController.getAllSkills(req, res)
);
router.put("/skills/:id", auth, (req, res) =>
  skillsController.upsertSkills(req, res)
);
router.delete("/skills/:id", auth, (req, res) =>
  skillsController.deleteSkill(req, res)
);

//Education controller routes
const educationController = new EducationController();
router.get("/educations/:userResumeId", auth, (req, res) =>
  educationController.getAllEducations(req, res)
);
router.put("/educations/:id", auth, (req, res) =>
  educationController.upsertEducations(req, res)
);
router.delete("/educations/:id", auth, (req, res) =>
  educationController.deleteEducation(req, res)
);

//Experience controller routes
const experienceController = new ExperienceController();
router.get("/experiences/:userResumeId", auth, (req, res) =>
  experienceController.getAllExperiences(req, res)
);
router.put("/experiences/:id", auth, (req, res) =>
  experienceController.upsertExperiences(req, res)
);
router.delete("/experiences/:id", auth, (req, res) =>
  experienceController.deleteExperience(req, res)
);

//UserResumeCmp controller routes
const userResumeCmpController = new UserResumeCmpController();
router.get("/userResumeCmps/:userResumeId", auth, (req, res) =>
  userResumeCmpController.getAllUserResumeCmps(req, res)
);
router.post("/userResumeCmps", auth, (req, res) =>
  userResumeCmpController.upsertUserResumeCmp(req, res)
);
router.put("/userResumeCmps/:id", auth, (req, res) =>
  userResumeCmpController.updateUserResumeCmp(req, res)
);
router.delete("/userResumeCmps/:id", auth, (req, res) =>
  userResumeCmpController.deleteUserResumeCmp(req, res)
);

module.exports = router;
