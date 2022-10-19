const express = require("express")
const {MongoClient} = require("mongodb")
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(cors())

const uri = "mongodb://localhost:27017";

app.use(bodyParser.json())

// let collection;


app.get('/', (req, res) => {
    res.send("Works!")
})

async function connect(title) {
    const client = new MongoClient(uri)
    try {
        
        await client.connect();
        const db = client.db("")
        const collection = db.collection("")

        console.log("collection found: ", collection.collectionName);

        // return collection;

        console.log("id: ", typeof id);
        const book = await collection.find({
          title: /.*id.*/,
        });

        const result = await book.toArray();
        console.log("book: ", result);

        return result;
    } catch (error) {
        console.error("Error: ", error)
    } finally {
        client.close();
    }
}

async function connectInsert(body) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("");
    const collection = db.collection("");

    console.log("passinggggG; ", body);

    const book = await collection.insertOne(body)

    const result = book.insertedId;

    return result;

  } catch (error) {
    console.error("Error: ", error);
  } finally {
    client.close();
  }
}

app.get('/books', async (req, res) => {
    
    const title = req.query.title;
    const foundBook = await connect(title);

    res.send(foundBook)
})

app.post('/books', async (req, res) => {
    console.log("this is sent: ", JSON.stringify(req.body));
    const response = await connectInsert(req.body)

    console.log("response in app: ", response);

    res.send(response)
})

app.listen(3000)