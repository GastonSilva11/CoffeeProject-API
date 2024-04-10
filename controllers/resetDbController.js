const createDatabaseTables = require("../createDatabaseTables");
const runAllSeeders = require("../seeders/runAllSeeders");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function resetDb(req, res) {
  try {
    await createDatabaseTables();
    await runAllSeeders();
    const { data, error } = await supabase.storage.emptyBucket("tmp_images");
    return res.json({ message: "Database reset successful" });
  } catch (error) {
    console.error("Error resetting database:", error);
    return res.status(500).json({ error: "An error occurred while resetting the database" });
  }
}

module.exports = {
  resetDb,
};
