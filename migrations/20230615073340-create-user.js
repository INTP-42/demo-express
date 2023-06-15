const { generateMigrationData } = require("../src/utils");

const processData = async () => {
  const data = [];
  for (let i = 0; i < 2; i += 1) {
    await generateMigrationData().then((info) => {
      data.push({
        ...info,
        role: "user",
      });
    });
  }
  await generateMigrationData().then((info) => {
    data.push({
      ...info,
      role: "admin",
    });
  });
  return data;
};

module.exports = {
  async up(db) {
    const data = await processData();
    await db.collection("users").insertMany(data);
  },

  async down(db) {
    await db.collection("users").drop();
  },
};
