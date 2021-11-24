const express = require('express');

const { check } = require('express-validator');

const { crearEmail } = require('../controller/auth');
const accountRoutes = express.Router();


const fs = require('fs');
const dataPath = './Details/mail.json';

// util functions 
/* saveAccountData - This function will make use of
 the writeFileSync method to read our account data in the JSON file. */
const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPath, stringifyData)
}

const getEmailData = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)
}

// reading the data
/* accountRoutes.get('/mail', [check('userid', 'el id del usuario es obligatorio').not().isEmpty(),], (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
}); */
accountRoutes.get('/mail', [check('userid', 'el id del usuario es obligatorio').not().isEmpty(),], crearEmail);

accountRoutes.post('/mail/sendemail', (req, res) => {

  var existMail = getEmailData()
  const newAccountId = Math.floor(100000 + Math.random() * 900000)

  existMail[newAccountId] = req.body

  console.log(existMail);

  saveAccountData(existMail);
  res.send({ success: true, msg: 'account data added successfully' })
})

// Read - get all accounts from the json file
accountRoutes.get('/mail/list/', (req, res) => {

  const mail = getEmailData()
  res.send(mail)
})

// Update - using Put method
accountRoutes.put('/mail/:id', (req, res) => {
  var existMail = getEmailData()
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const accountId = req.params['id'];
    existMail[accountId] = req.body;

    saveAccountData(existMail);
    res.send(`accounts with id ${accountId} has been updated`)
  }, true);
});

//delete - using delete method
accountRoutes.delete('/mail/delete/:id', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    var existAccounts = getEmailData()

    const userId = req.params['id'];

    delete existAccounts[userId];
    saveAccountData(existAccounts);
    res.send(`accounts with id ${userId} has been deleted`)
  }, true);
})

module.exports = accountRoutes