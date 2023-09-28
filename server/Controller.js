import { ObjectId } from "bson";
//import jsonauthors from "./Wordigma.authors.json" assert { type: "json" };

export default function Controller(app, db) {
  app.get("/quotes/:mode/:id", async (req, res) => {
    try {
      res.send(
        await db
          .collection("quotes")
          .find({
            _id: {
              [`${req.params.mode == "fav" ? "$in" : "$nin"}`]: (
                await db
                  .collection("users")
                  .find({ _id: new ObjectId(req.params.id) })
                  .toArray()
              )[0]["favorite"],
            },
          })
          .toArray()
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.post("/:col", async (req, res) => {
    try {
      console.log("ddddd");
      res.send(await db.collection(req.params.col).insertOne(req.body));
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.put("/:col/:id/delete/array/:property", async (req, res) => {
    try {
      res.send(
        await db.collection(req.params.col).updateOne(
          { _id: new ObjectId(req.params.id) },
          {
            $set: {
              [`${req.params.property}`]: [],
            },
          }
        )
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.get("/:col", async (req, res) => {
    try {
      res.send(
        await db.collection(req.params.col).find(req.params.filter).toArray()
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.get("/:col/:id", async (req, res) => {
    try {
      res.send(
        (
          await db
            .collection(req.params.col)
            .find({ _id: new ObjectId(req.params.id) })
            .toArray()
        )[0]
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.get("/:col/filter/:filter", async (req, res) => {
    try {
      res.send(
        await db
          .collection(req.params.col)
          .find(JSON.parse(req.params.filter))
          .toArray()
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.get("/:col/:id/:property", async (req, res) => {
    try {
      res.send(
        (
          await db
            .collection(req.params.col)
            .find({ _id: new ObjectId(req.params.id) })
            .toArray()
        )[0][req.params.property]
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.put("/:col/:id/array/:mode/:property", async (req, res) => {
    try {
      console.log("ddd");
      res.send(
        await db.collection(req.params.col).updateOne(
          { _id: new ObjectId(req.params.id) },
          {
            [`${req.params.mode == "add" ? "$addToSet" : "$pull"}`]: {
              [`${req.params.property}`]: new ObjectId(req.body._id),
            },
          }
        )
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.get("/c/r/e/a/t/e", async (req, res) => {
    try {
      let quotes = [];

      jsonauthors.forEach((obj) => {
        let index = 0;
        obj.quotes.forEach((quote) => {
          const quote2 = {
            _id: new ObjectId(),
            text: quote.text,
          };
          obj.quotes[index] = quote2;
          quotes.push({
            ...quote2,
            author: {
              _id: new ObjectId(obj._id.$oid),
              name: obj.name,
            },
          });
          index++;
        });
        console.log(obj._id.$oid);
        obj._id = new ObjectId(obj._id.$oid);
        console.log(obj._id);
      });
      await db.collection("authors").insertMany(jsonauthors);
      await db.collection("quotes").insertMany(quotes);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
}
