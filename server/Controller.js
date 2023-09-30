import { ObjectId } from "bson";

export default function Controller(app, db) {
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
  app.post("/quotes", async (req, res) => {
    try {
      const id = new ObjectId();
      await db.collection("authors").updateOne(
        { _id: new ObjectId(req.body.author._id) },
        {
          $addToSet: {
            quotes: { _id: id, text: req.body.text },
          },
        }
      );
      res.send(
        await db.collection("quotes").insertOne({
          _id: id,
          text: req.body.text,
          author: {
            ...req.body.author,
            _id: new ObjectId(req.body.author._id),
          },
        })
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.post("/:col", async (req, res) => {
    try {
      res.send(await db.collection(req.params.col).insertOne(req.body));
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.put("/:col/:id/clear/array/:property", async (req, res) => {
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
}
