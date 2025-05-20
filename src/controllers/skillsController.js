const { Skill } = require("../models/index");

class SkillsController {
  constructor() {
    this.skillModel = Skill;
  }

  // async createSkill(req, res) {
  //   try {
  //     const skill = await Skill.create(req.body);
  //     res.status(201).json({ skill });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  async getSkill(req, res) {
    try {
      const skill = await Skill.findByPk(req.params.id);
      if (!skill) {
        return res.status(404).json({ error: "Skill not found" });
      }
      res.status(200).json({ skill });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllSkills(req, res) {
    try {
      const skill = await Skill.findAll({
        where: { userResumeId: req.params.userResumeId },
      });
      res.status(200).json({ skill });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateSkill(req, res) {
    try {
      const [updated] = await Skill.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Skill not found" });
      }
      const updatedSkill = await this.skillModel.findByPk(req.params.id);
      res.status(200).json({ resume: updatedSkill });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteSkill(req, res) {
    try {
      const deleted = await Skill.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Skill not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async upsertSkills(req, res) {
    try {
      const skills = req.body; // Expecting an array of skill objects

      if (!Array.isArray(skills)) {
        return res
          .status(400)
          .json({ error: "Input must be an array of skills" });
      }

      await Skill.destroy({
        where: { userResumeId: skills[0].userResumeId },
      });

      await Skill.bulkCreate(skills, {
        updateOnDuplicate: ["id", "name", "rating", "userResumeId"], // Fields to update
      });

      // Fetch all records again by resumeId
      const updatedSkills = await Skill.findAll({
        where: { userResumeId: skills[0].userResumeId },
      });

      res.status(200).json({ skills: updatedSkills });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = SkillsController;
