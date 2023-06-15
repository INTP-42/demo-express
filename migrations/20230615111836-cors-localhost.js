module.exports = {
  async up(db) {
    await db.collection("cors").insertOne({
      email: "admin@yopmail.com",
      ip_address: "http://localhost:3000",
    });
  },

  async down(db) {
    await db.collection("cors").drop();
  },
};
