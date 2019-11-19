import express from 'express';
import Person from './modules/Person';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
   const person = new Person('serhan','uras');


  res.json(person.getInstance());
});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});