const { Router, response } = require("express");
const { apiToDb } = require("../functions/apiToDb");
const { queryFinder } = require("../functions/queryFinder");
const { idFinder } = require("../functions/idFinder");
const router = Router();

router.get("/", routerFunction);
router.get("/:id", routerFunctionId);

function routerFunction(req, res, next) {
  const { name } = req.query;
  const fixedName = name.trim();

  if (!name) {
    apiToDb().then((response) => {
      res.status(200).json(response);
    });
  }

  if (name) {
    queryFinder(fixedName)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => next(error));
  }
}

function routerFunctionId(req, res, next) {
  const { id } = req.params;
  const fixedId = id.toUpperCase();

  idFinder(fixedId)
    .then((r) => {
      res.status(200).json(r);
    })
    .catch((error) => next(error));
}

module.exports = router;
