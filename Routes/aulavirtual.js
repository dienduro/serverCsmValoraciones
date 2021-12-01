const express = require('express');

const {check} = require('express-validator');


const accountRoutes = express.Router();
const fs = require('fs');
const dataPath = './Details/aulavirtual.json';

const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
  }


  const getData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
  }

  accountRoutes.post('/aula/newFile', (req, res) => {

    /* var existMail = getData()
    const newAccountId = Math.floor(100000 + Math.random() * 900000)
  
    existMail[newAccountId] = req.body
  
    console.log(existMail);
  
    saveAccountData(existMail);
    res.send({ success: true, msg: 'account data added successfully' }) */
  })

  accountRoutes.get('/aula/list/', (req, res) => {

    const aula = getData()
    res.send(aula)
  })

  //delete - using delete method
accountRoutes.delete('/aula/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existAccounts = getData()
  
      const userId = req.params['id'];
  
      delete existAccounts[userId];
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })

  module.exports = accountRoutes