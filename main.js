import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});

//CRUD functionality of movies

//R - for Reading
app.post('/movies', () =>{

})
 
//C - For creating movies 
app.post('/movies', () =>{
  
})

// U - For updating movie
app.put('/movies/:id', () =>{

})

//D - For deleting movie
app.delete('/movies/:id',() =>{
  
})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});