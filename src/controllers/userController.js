//import User from "../models/user.js";
const { User } = require("../models/index");
class UserController {
  constructor() {
    this.userModel = User;
  }

  async createUser(req, res) {
    try {
      const user = await this.userModel.create(req.body);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const user = await this.userModel.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUser(req, res) {
    try {
      const user = await User.findAll();
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const [updated] = await this.userModel.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "User not found" });
      }
      const updatedUser = await this.userModel.findByPk(req.params.id);
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const deleted = await this.userModel.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
