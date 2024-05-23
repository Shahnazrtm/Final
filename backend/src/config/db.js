const mongoose = require("mongoose") // new

mongoose
	.connect(process.env.MongoURL).then(()=>{
        console.log("Connected MongoDb")
    }).catch((err)=>{
        console.log(err)
    })

	