const express = require("express");

const router = express.Router();

const {
  authentication,
  authenticationCallback,
  repositories,
  repoCommits,
  extractId,
  getLogs,
} = require("../Controllers/controller");

router
  .get("/auth/github", authentication)
  .get("/auth/github/callback", authenticationCallback)
  .get("/user/repos/:token", repositories) //Gives aauthorized user repositories
  .get("/user/repos/:token/:owner/:repo/commits", repoCommits) //Gives all the commits in repos
  .get("/user/repos/:token/:owner/:repo/getId", extractId) //Gives me Id's for Logs
  .get("/user/repos/:token/:owner/:repo/:run_id/getLogs", getLogs); //Get logs of Day by day

module.exports = router;
