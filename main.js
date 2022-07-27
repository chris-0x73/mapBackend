import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pinRoute from "./routes/pins.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());
//app.use(express.urlencoded());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true, maybe not needed!
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));
