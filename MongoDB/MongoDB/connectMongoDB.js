//forma de conectar SEM o Mongoose

//importando o MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');

//variável uri recebe o banco de dados do mongo db, com senha, nome de usuário e nome do banco de dados
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodeteste.evberpg.mongodb.net/?retryWrites=true&w=majority`;

//função que conecta o banco de dados e deixa pronto pra exportar
const connectDatabase = async () => {
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Conectado com sucesso ao MongoDB!");
    } 
    catch {
      console.log("Ocorreu um erro ao conectar ao MongoDB!");
    }
     finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
}

//transformando em módulo e exportando
module.exports = connectDatabase
