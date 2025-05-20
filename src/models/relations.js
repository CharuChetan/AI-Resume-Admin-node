// const UserResume = require("./userResume");
// const UserResumeCmp = require("./userResumeCmp");
// const Education = require("./education");
// const Experience = require("./experience");
// const Skill = require("./skill");
module.exports = (db) => {
  const { UserResume, UserResumeCmp, Experience, Skill, Education } = db;

  if (!UserResume || !UserResumeCmp) {
    throw new Error("Models not loaded correctly");
  }

  // UserResume has many UserResumeCmp (user_resumes_cmps.entity_id -> user_resumes.id)
  UserResume.hasMany(UserResumeCmp, {
    foreignKey: "userResumeId",
    as: "components",
  });
  UserResumeCmp.belongsTo(UserResume, {
    foreignKey: "userResumeId",
    as: "UserResumeCmpresume",
  });

  // Example: If you want to relate Education, Experience, and Skill to UserResume via email
  UserResume.hasMany(Education, {
    foreignKey: "userResumeId",
    as: "educations",
  });
  Education.belongsTo(UserResume, {
    foreignKey: "userResumeId",
    as: "Educationresume",
  });

  UserResume.hasMany(Experience, {
    foreignKey: "userResumeId",
    as: "experiences",
  });
  Experience.belongsTo(UserResume, {
    foreignKey: "userResumeId",
    as: "Experienceresume",
  });

  UserResume.hasMany(Skill, {
    foreignKey: "userResumeId",
    as: "skills",
  });
  Skill.belongsTo(UserResume, {
    foreignKey: "userResumeId",
    as: "Skillresume",
  });
};
// Export models if needed
// module.exports = {
//   UserResume,
//   UserResumeCmp,
//   Education,
//   Experience,
//   Skill,
// };
