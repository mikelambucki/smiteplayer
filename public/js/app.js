
//had this in a seperate file, need to modularize this and have seperate files for
//seperate requests + actions on the DOM when getting data.


//finish requirejs videos

const devId = "3529";
const authKey = "C6F67AC2EF0D4981BFB747B2020D7B0F";

const endPoint = "http://api.smitegame.com/smiteapi.svc";

function pad2(n) { return n < 10 ? '0' + n : n }

var date = new Date();

var timestamp = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds());

console.log(timestamp);

let md5Hash;
console.log(md5Hash);


console.log()

//front end request using fetch gives CORS error
//maybe this needs to be done in the backend?
async function createSession(endPoint){

    const response = fetch(endPoint,{
        method: 'GET', //*POST,PUT,GET,DELETE, etc // no-cors, cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data =  (await response).json();
    
    return data;
}

createSession('/createsession')
        .then((data) => console.log(data))

//restful api,

///need to store and fetch data
//client (code) wants to access the api through server

//restful apis are stateless backends

//RESTful constraints
//client-server architecture, stateless, cacheability, layered system, uniform interface, code on demand




// MOST API REQUESTS WILL BE DONE VIA SERVED HTML FILES