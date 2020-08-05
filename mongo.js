const {MongoClient} = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log('Databases');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}


async function main(){

    const uri = "mongodb+srv://mike:dzida100@smitedb.i4syk.mongodb.net/<dbname>?retryWrites=true&w=majority";

    const client = new MongoClient(uri,  { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        //Connect to MongoDB cluster
        await client.connect();


        //Make DB calls
        await listDatabases(client);
    } catch(error){
        console.error(error);
    } finally {
        await client.close();
    }

}

main().catch(console.error);



