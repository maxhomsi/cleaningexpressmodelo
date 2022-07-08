let db = require("../model/db.js"); //requista o db.js para ser ativado

let maidList = function (req, res) {
  console.log("maidList");
  let sql = "select * from maid_info";

  db.query(sql, function (err, results) {
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
let maidInfo = function (req, res) {
  console.log("maidInfo");
  let id = req.params.id;
  let sql = "select id, maid_name from maid_info where id = ?";
  let params = [];
  params.push(id);
  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("could not execute the request", err); //se tiver o erro, envia a resposta
      res.sendStatus(500);
    } else {
      if (results.length == 1) {
        //procurando se so tem uma pessoa com o id
        let result = results[0]; //???
        res.json(results[0]);
      } else if (results.length > 1) {
        console.log("one more ID founded", id);
        res.sendStatus(500);
      } else {
        res.sendStatus(404);
      }
    }
  });
};


let registerCust = function (req, res) {
    console.log("registerCust");
    console.log("TOKEN", req.newtoken);
    let userId = req.newtoken.user_id;
    let input = req.body;
    let custName = input.cust_name;
  
    if (!custName) {
      res.sendStatus(400).send("custName is required");
      return;
    }
  
    if (!userId) {
      res.sendStatus(400).send("userId is required");
      return;
    }
  
    let sql = "insert into cust_info(cust_name, userId) values(?,?)";
    let params = [custName, userId];
  
    db.query(sql, params, function (err, results) {
      if (err) {
        console.log("could not execute the insert", err); //se tiver o erro, envia a respota
        res.sendStatus(500);
      } else {
        res.sendStatus(204);
      }
    });
  };
  let custInfo = function (req, res) {
    console.log("custInfo");
    let id = req.params.id;
    let sql = "select id, cust_name from cust_info where id = ?";
    let params = [];
    params.push(id);
    db.query(sql, params, function (err, results) {
      if (err) {
        console.log("could not execute the request", err); //se tiver o erro, envia a resposta
        res.sendStatus(500);
      } else {
        if (results.length == 1) {
          //procurando se so tem uma pessoa com o id
          let result = results[0]; //???
          res.json(results[0]);
        } else if (results.length > 1) {
          console.log("one more ID founded", id);
          res.sendStatus(500);
        } else {
          res.sendStatus(404);
        }
      }
    });
  };


module.exports = {
  maidList,
  registerMaid,
  maidInfo,
  registerCust,
  custInfo
};
