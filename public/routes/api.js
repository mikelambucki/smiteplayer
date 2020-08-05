const express = require('express');
const router = express.Router();
const API = require('../../auth');
const CryptoJS = require("crypto-js")
const Axios = require('../../axios.js');
const cron = require('node-cron');
 
const axios = new Axios.Axios();
//need to call createsession, then after first call once every 14 minutes

function createSession(){
  let md5Hash = API.md5('createsession');
  //calls async axios get that calls the API end point with the hashed value
  return axios.create(md5Hash);
}

function getPlayer(player){
  let md5Hash = API.md5('getplayer');

  return axios.getPlayer(md5Hash,player);
}

router.get('/', function(req,res){

  res.end('main api page');

});

router.get('/createsession', async function (req,res) {
  
  const session = await createSession();
  axios.session = session.session_id;
  //populate player class
  //use session data to populate Player class

  res.json(session);
  res.end(200);
});

router.get('/getplayer', async function (req,res) {

    const playerData = await getPlayer('Rethax');

    res.json(playerData);
});



//can use same route if its POST (diff method)
//seems like most will be GET requests, as data is just
//being taken from an 5already built API


  module.exports = router;