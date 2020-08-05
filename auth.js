const config = require('./config.js');
const CryptoJS = require('crypto-js');


const devId = config.smiteApi.devId;
const auth = config.smiteApi.auth;
const endPoint = config.smiteApi.endPoint;
function pad2(n) { return n < 10 ? '0' + n : n }

var date = new Date();

var timestamp = date.getFullYear().toString() + pad2(date.getUTCMonth() + 1) + pad2( date.getUTCDate()) + pad2( date.getUTCHours()) + pad2( date.getUTCMinutes() ) + pad2( date.getUTCSeconds());
console.log(timestamp);


function pad2(n) { return n < 10 ? '0' + n : n }
function md5(query){
    if(!(typeof query === 'string')){
        //place holder, CHANGE THIS TO SOMETHING ELSE 
        let md5Hash = CryptoJS.MD5(devId + 'createsession' + auth + timestamp).toString();
    }
    let md5Hash = CryptoJS.MD5(devId + query + auth + timestamp).toString();    
    return md5Hash;
} 

var credentials  = {
    devId : devId,
    auth : auth,
    endPoint : endPoint,
    timestamp : timestamp
}

module.exports = {
    credentials : credentials,
    md5 : md5
}
