import exp from "express";
import mongoose from "mongoose";
import productRouter  from "../router/product";

const app = express();
app.use(express.json());

app.use("/api", productRouter());
mongoose.connect('mongodb://localhost:27107/nodejs')


export const viteNoteApp = app;