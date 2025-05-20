const {
  UserResume,
  Education,
  Experience,
  Skill,
  UserResumeCmp,
} = require("../models/index");

class UserResumeRelationsController {
  // Get all user resumes with all related data
  async getAllResume(req, res) {
    try {
      const resumes = await UserResume.findAll({
        where: { userEmail: req.params.email },

        include: [
          { model: Education, as: "educations" },
          { model: Experience, as: "experiences" },
          { model: Skill, as: "skills" },
          { model: UserResumeCmp, as: "components" },
        ],
        order: [["updated_at", "DESC"]],
      });
      res.status(200).json({ resumes });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get a single user resume by id with all related data
  async getResume(req, res) {
    try {
      const resumes = await UserResume.findOne({
        where: { resumeId: req.params.id },
        include: [
          { model: Education, as: "educations" },
          { model: Experience, as: "experiences" },
          { model: Skill, as: "skills" },
          { model: UserResumeCmp, as: "components" },
        ],
      });
      if (!resumes) return res.status(404).json({ error: "Resume not found" });
      res.status(200).json({ resumes });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserResumeRelationsController;
