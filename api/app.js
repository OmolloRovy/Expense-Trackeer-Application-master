const { config } = require('dotenv');
config();

const { db } = require('./db/db');
const  express = require('express');
const cors =require('cors');
const {readdirSync} = require('fs')
const app= express();

const PORT= process.env.PORT

//middlewares
app.use(express.json());
app.use(cors({

}));


//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/'+ route)))


app.get('/', (req, res)=> {
    res.send('Expenses management')
});
const server =()=>{
db();
app.listen(PORT, () =>{
    console.log("Server running at port:",PORT)
});

};
server();
