const UserResume = require("./userResume");
const UserResumeCmp = require("./userResumeCmp");
const Education = require("./education");
const Experience = require("./experience");
const Skill = require("./skill");

// UserResume has many UserResumeCmp (user_resumes_cmps.entity_id -> user_resumes.id)
UserResume.hasMany(UserResumeCmp, {
  foreignKey: "entity_id",
  as: "components",
});
UserResumeCmp.belongsTo(UserResume, { foreignKey: "entity_id", as: "resume" });

// Example: If you want to relate Education, Experience, and Skill to UserResume via email
UserResume.hasMany(Education, {
  foreignKey: "user_email",
  sourceKey: "user_email",
  as: "educations",
});
Education.belongsTo(UserResume, {
  foreignKey: "user_email",
  targetKey: "user_email",
  as: "Educationresume",
});

UserResume.hasMany(Experience, {
  foreignKey: "user_email",
  targetKey: "user_email",
  as: "experiences",
});
Experience.belongsTo(UserResume, {
  foreignKey: "user_email",
  targetKey: "user_email",
  as: "Experienceresume",
});

UserResume.hasMany(Skill, {
  foreignKey: "user_email",
  targetKey: "user_email",
  as: "skills",
});
Skill.belongsTo(UserResume, {
  foreignKey: "user_email",
  targetKey: "user_email",
  as: "Skillresume",
});

// Export models if needed
module.exports = {
  UserResume,
  UserResumeCmp,
  Education,
  Experience,
  Skill,
};
