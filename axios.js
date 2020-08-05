const axios = require('axios');
const API = require('./auth.js');

class Axios {
    

    #devId;
    #timestamp;
    #endPoint;
    #session;
    constructor() {
        this.#devId = API.credentials.devId;
        this.#timestamp = API.credentials.timestamp;
        this.#endPoint = API.credentials.endPoint;
        this.#session = '';
    }

    get session(){
        return this.#session;
    }

    set session(session){
        this.#session = session;
    }
    async create(md5Hash){
        try{
            //calls API create session request, need to do this every 15 min as it expires
            let response = await axios.get(this.#endPoint + "/createsessionjson/" + this.#devId +"/" + md5Hash + "/" + this.#timestamp);
            //returns value that API sends the axios get request
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
    //INPUT:
    //md5Hash - signature of hashed info specific to getPlayer
    //player - either player name or internally stored playerId
    async getPlayer(md5Hash,player,portalId = '1'){
        try{
            //calls API create session request, need to do this every 15 min as it expires
            
            let response = await axios.get(this.#endPoint + "/getplayerjson/" + this.#devId + "/" + md5Hash + "/" + this.#session + "/" + this.#timestamp + "/" + player + "/" + portalId);
            //returns value that API sends the axios get request
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
}


module.exports = {
    Axios : Axios
}