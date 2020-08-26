require("dotenv").config();
const cors=require('cors');
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');

const app = express()

const employeeRoutes=require("./routes/employee");


mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
}).then(() =>{
    console.log("DB CONECTED")
});

app.use(cors({origin:
  process.env.CORS_ORIGIN
}));


app.use(express.json());

app.use(employeeRoutes);

// //serve static assets
if(process.env.NODE_ENV ==='production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {//req load index.html
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}



const port = process.env.PORT || 8000

//tested at the start----
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})