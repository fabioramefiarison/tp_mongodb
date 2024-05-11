require('dotenv').config()
const { MongoClient } = require("mongodb");
const Client = new MongoClient(process.env.MONGO_URL);

async function Main () {
   await Client.connect();
   console.log("connection Okey !");
   const db = Client.db("mesTaches");//mi créer base de donnée
   const collection = db.collection("Documents");

  /* const inserstuff = await collection.insertMany([
      {a: 1},
      {b: 2},
      {c: 3}
   ]);
   console.log('document inserée => ', inserstuff);*/

   /*CREATE
   try {
      const inserData = await collection.insertMany([
         {
            nom: "Rakoto",
            age: 30,
            sexe: "masculin"
         },
         {
            nom: "Rasoa",
            age: 28,
            sexe: "feminin"
         },
         {
            nom: "Ndriana",
            age: 32,
            sexe: "masculin"
         },
      ]);
      console.log("documents insérée !", inserData);
   } catch (error) {throw error}*/

   //READ
   try {
      const findData = await collection.findOne({nom: "Rasoa"});
      console.log("Document trouvée !", findData);
   } catch (error) {
    throw(error)  
   }

   //UPDATE
      try {
         const updateNdriana = await collection.updateOne({nom: "Ndriana"},{
            $set: {nom: 'Soa', sexe: "feminin"}
         })
         console.log(await updateNdriana);
      } catch (error) {
         throw(error)
      }


   return "done";
}

Main()
   .then(console.log)
   .catch(console.error)
   .finally(() => Client.close())