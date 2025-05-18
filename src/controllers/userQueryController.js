const UserQuery = require("../models/userQuery");

class UserQueryController {
  constructor() {
    this.userQueryModel = UserQuery;
  }

  async createQuery(req, res) {
    try {
      const query = await this.userQueryModel.create(req.body);
      res.status(201).json({ query });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getQuery(req, res) {
    try {
      const query = await this.userQueryModel.findByPk(req.params.id);
      if (!query) {
        return res.status(404).json({ error: "Query not found" });
      }
      res.status(200).json({ query });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllQueries(req, res) {
    try {
      const queries = await this.userQueryModel.findAll();
      res.status(200).json({ queries });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateQuery(req, res) {
    try {
      const [updated] = await this.userQueryModel.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ error: "Query not found" });
      }
      const updatedQuery = await this.userQueryModel.findByPk(req.params.id);
      res.status(200).json({ query: updatedQuery });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteQuery(req, res) {
    try {
      const deleted = await this.userQueryModel.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ error: "Query not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserQueryController;
