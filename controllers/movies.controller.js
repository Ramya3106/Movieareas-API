export const MovieIndex = (req, res) => {
res.send("Get all movie lists");
};

 export const MovieCreate = (req, res) => {
    //id, title, desc

    console.log(req.body);

    return res.json(req.body);


  //create the movie info.
};

export const MovieUpdate = (req, res) => {
res.send("update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("delete a movie");
};