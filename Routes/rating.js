const express = require("express")
const accountRoutes = express.Router();
const fs = require('fs');

const dataPath = './details/valoraciones.json'



// util functions 

/* const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
} */

const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}

// reading the data
accountRoutes.get('/valoraciones', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });


  // Read - get all accounts from the json file
accountRoutes.get('/valoraciones/list', (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
  })

  module.exports = accountRoutes