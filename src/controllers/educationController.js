const { Education } = require("../models/index");
//import Education from "../models/index.js";

class EducationController {
  constructor() {
    this.educationModel = Education;
  }

  // async createEducation(req, res) {
  //   try {
  //     const education = await Education.create(req.body);
  //     res.status(201).json({ education });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  // async getEducation(req, res) {
  //   try {
  //     const education = await Education.findByPk(req.params.id);
  //     if (!education) {
  //       return res.status(404).json({ error: "Education not found" });
  //     }
  //     res.status(200).json({ education });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  async getAllEducations(req, res) {
    try {
      const education = await Education.findAll({
        where: { userResumeId: req.params.userResumeId },
      });
      res.status(200).json({ education });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateEducation(req, res) {
    try {
      const [updated] = await Education.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Education not found" });
      }
      const updatedEducation = await this.educationModel.findByPk(
        req.params.id
      );
      res.status(200).json({ resume: updatedEducation });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteEducation(req, res) {
    try {
      const deleted = await Education.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Education not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async upsertEducations(req, res) {
    try {
      const educations = req.body; // Expecting an array of skill objects

      if (!Array.isArray(educations)) {
        return res
          .status(400)
          .json({ error: "Input must be an array of educations" });
      }

      await Education.destroy({
        where: { userResumeId: educations[0].userResumeId },
      });

      await Education.bulkCreate(educations, {
        updateOnDuplicate: [
          "id",
          "university_name",
          "degree",
          "major",
          "start_date",
          "end_date",
          "description",
          "userResumeId",
        ], // Fields to update
      });
      // Fetch all records again by resumeId
      const result = await Education.findAll({
        where: { userResumeId: educations[0].userResumeId },
      });
      res.status(200).json({ educations: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = EducationController;
