import express from "express";
import UserResumeRelationsController from "../controllers/userResumeRelationsController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
const userResumeRelationsController = new UserResumeRelationsController();

router.get("/user-resumes/email/:email", auth, (req, res) =>
  userResumeRelationsController.getAllResume(req, res)
);
router.get("/user-resumes/:id", auth, (req, res) =>
  userResumeRelationsController.getResume(req, res)
);

export default router;
