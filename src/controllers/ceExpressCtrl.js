let db = require("../model/db.js"); //requista o db.js para ser ativado

let maidList = function (req, res) {
  console.log("maidList");
  let sql = "select * from maid_info";

  db.query(sql, function (err, res) {
    if (err) {
      console.log("could not execute the query", err); //se tiver o erro, envia a respota
      res.sendStatus(400);
    } else {
      res.json(results);
    }
  });
};

let registerMaid = function (req, res) {
  console.log("registerMaid");
  console.log("TOKEN", req.newtoken);
  let userId = req.newtoken.user_id;
  let input = req.body;
  let maidName = input.maid_name;

  if (!maidName) {
    res.sendStatus(400).send("maidName is required");
    return;
  }

  if (!userId) {
    res.sendStatus(400).send("userId is required");
    return;
  }

  let sql = "insert into maid_info(maid_name, userId) values(?,?)";
  let params = [maidName, userId];

  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("could not execute the insert", err); //se tiver o erro, envia a respota
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
};
let maidInfo = function (req, res){
console.log("maidInfo");

}

module.exports = {
  maidList,
  registerMaid,
  maidInfo
};
