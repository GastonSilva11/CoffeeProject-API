function isAdmin(req, res, next) {
  if (req.auth.role === "admin") return next();
  return res.send("Protected");
}
module.exports = isAdmin;
