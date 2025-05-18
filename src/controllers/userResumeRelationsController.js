const {
  UserResume,
  Education,
  Experience,
  Skill,
  UserResumeCmp,
} = require("../models/relations");

class UserResumeRelationsController {
  // Get all user resumes with all related data
  async getAllResume(req, res) {
    try {
      const resumes = await UserResume.findAll(
        { where: { user_email: req.params.email } },
        {
          include: [
            { model: Education, as: "educations" },
            { model: Experience, as: "experiences" },
            { model: Skill, as: "skills" },
            { model: UserResumeCmp, as: "components" },
          ],
        }
      );
      res.status(200).json({ resumes });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get a single user resume by id with all related data
  async getResume(req, res) {
    try {
      const resume = await UserResume.findAll(
        { where: { documentId: req.params.id } },
        {
          include: [
            { model: Education, as: "educations" },
            { model: Experience, as: "experiences" },
            { model: Skill, as: "skills" },
            { model: UserResumeCmp, as: "components" },
          ],
        }
      );
      if (!resume) return res.status(404).json({ error: "Resume not found" });
      res.status(200).json({ resume });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserResumeRelationsController;
