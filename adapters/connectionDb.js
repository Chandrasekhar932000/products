const {connect} = require('mongoose');
require('dotenv').config();

//!!   Creating Database and connecting to it
connect(process.env.URL).
then(()=>
{
    console.log("MongoDb connected Successfully")
}).catch(err=>
    {
        console.log(err)
    })