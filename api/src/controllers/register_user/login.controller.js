import passport from "passport";

export async function _getInformation_(req, res) {
  return res.render("register/information");
}

export async function _get_(req, res) {
  return res.render("register/login", {});
}

export async function _post_(req, res, next) {
  passport.authenticate("login", {
    successRedirect: "/publication",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
}
