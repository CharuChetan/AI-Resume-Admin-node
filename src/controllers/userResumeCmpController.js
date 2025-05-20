const { UserResumeCmp } = require("../models/index");
//import UserResumeCmp from "../models/index.js";

class UserResumeCmpController {
  constructor() {
    this.userResumeCmpModel = UserResumeCmp;
  }

  // async createUserResumeCmp(req, res) {
  //   try {
  //     const userResumeCmp = await UserResumeCmp.create(req.body);
  //     res.status(201).json({ userResumeCmp });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  // async getUserResumeCmp(req, res) {
  //   try {
  //     const userResumeCmp = await UserResumeCmp.findByPk(req.params.id);
  //     if (!userResumeCmp) {
  //       return res.status(404).json({ error: "UserResumeCmp not found" });
  //     }
  //     res.status(200).json({ userResumeCmp });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  async getAllUserResumeCmps(req, res) {
    try {
      const userResumeCmp = await UserResumeCmp.findAll({
        where: { userResumeId: req.params.userResumeId },
      });
      res.status(200).json({ userResumeCmp });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUserResumeCmp(req, res) {
    try {
      const [updated] = await UserResumeCmp.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "UserResumeCmp not found" });
      }
      const updatedUserResumeCmp = await this.userResumeCmpModel.findByPk(
        req.params.id
      );
      res.status(200).json({ resume: updatedUserResumeCmp });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUserResumeCmp(req, res) {
    try {
      const deleted = await UserResumeCmp.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "UserResumeCmp not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async upsertUserResumeCmp(req, res) {
    try {
      const userResumeCmps = req.body; // Expecting an array of skill objects

      if (!Array.isArray(userResumeCmps)) {
        return res
          .status(400)
          .json({ error: "Input must be an array of userResumeCmp" });
      }

      await UserResumeCmp.bulkCreate(userResumeCmps, {
        updateOnDuplicate: [
          "id",
          "component_type",
          "field",
          "order",
          "userResumeId",
        ], // Fields to update
      });
      // Fetch all records again by resumeId
      const result = await UserResumeCmp.findAll({
        where: { userResumeId: userResumeCmps[0].userResumeId },
      });
      res.status(200).json({ userResumeCmps: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserResumeCmpController;
