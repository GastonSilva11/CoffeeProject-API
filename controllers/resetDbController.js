const createDatabaseTables = require("../createDatabaseTables");
const runAllSeeders = require("../seeders/runAllSeeders");

async function resetDb(req, res) {
  try {
    await createDatabaseTables();
    await runAllSeeders();
    return res.json({ message: "Database reset successful" });
  } catch (error) {
    console.error("Error resetting database:", error);
    return res.status(500).json({ error: "An error occurred while resetting the database" });
  }
}

module.exports = {
  resetDb,
};
