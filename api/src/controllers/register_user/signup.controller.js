import passport from "passport";

export async function _get_(req, res) {
  return res.render("register/signup");
}

export async function _post_(req, res, next) {
  passport.authenticate("signup", {
    successRedirect: "/publication",
    failureRedirect: "/sign-up",
    failureFlash: true,
  })(req, res, next);
}
