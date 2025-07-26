import { model, Schema } from "mongoose";

//Write the schema

const schema = new Schema({
    title: string,
    desc: string,
});

//Create your model
const Movie = model("Movie", schema);

export default Movie;