const { Experience } = require("../models/index");
//import Experience from "../models/index.js";

class ExperienceController {
  constructor() {
    this.experienceModel = Experience;
  }

  async getAllExperiences(req, res) {
    try {
      const experience = await Experience.findAll({
        where: { userResumeId: req.params.userResumeId },
      });
      res.status(200).json({ experience });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateExperience(req, res) {
    try {
      const [updated] = await Experience.update(req.body.data, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Experience not found" });
      }
      const updatedExperience = await this.experienceModel.findByPk(
        req.params.id
      );
      res.status(200).json({ resume: updatedExperience });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteExperience(req, res) {
    try {
      const deleted = await Experience.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Experience not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async upsertExperiences(req, res) {
    try {
      const experiences = req.body; // Expecting an array of skill objects

      if (!Array.isArray(experiences)) {
        return res
          .status(400)
          .json({ error: "Input must be an array of experience" });
      }

      await Experience.destroy({
        where: { userResumeId: experiences[0].userResumeId },
      });

      await Experience.bulkCreate(experiences, {
        updateOnDuplicate: [
          "id",
          "title",
          "companyName",
          "city",
          "state",
          "startDate",
          "endDate",
          "workSummery",
          "currentlyWorking",
          "userResumeId",
        ], // Fields to update
      });

      // Fetch all records again by resumeId
      const result = await Experience.findAll({
        where: { userResumeId: experiences[0].userResumeId },
      });
      res.status(200).json({ experiences: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ExperienceController;
