const { UserResume } = require("../models/index");

class UserResumeController {
  constructor() {
    this.userResumeModel = UserResume;
  }

  async createResume(req, res) {
    try {
      const resume = await UserResume.create(req.body);
      res.status(201).json({ resume });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getResume(req, res) {
    try {
      const resume = await UserResume.findByPk(req.params.id);
      if (!resume) {
        return res.status(404).json({ error: "Resume not found" });
      }
      res.status(200).json({ resume });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateResume(req, res) {
    try {
      const [updated] = await UserResume.update(req.body, {
        where: { resumeId: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Resume not found" });
      }
      const updatedResume = await this.userResumeModel.findOne({
        where: { resumeId: req.params.id },
      });
      res.status(200).json({ resume: updatedResume });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteResume(req, res) {
    try {
      const deleted = await UserResume.destroy({
        where: { resumeId: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Resume not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserResumeController;
