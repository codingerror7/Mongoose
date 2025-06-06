const mongoose = require("mongoose");

main().then(()=>{
    console.log("SUCCESSFULL!");
}).catch((rej)=>{console.log(rej)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({   //SCHEMA
    name : String,
    email : String,
    age : Number,
});
const User = mongoose.model("User",userSchema);   //MODEL

 const user1 = new User({     //INSERT
     name : "sujal saraswat",
     email : "saraswatsujal@gmail.com",
     age : 21,
 });
 const user2 = new User({
     name : "sahil khanna",
     email : "khanna123@gmail.in",
     age : 22,
    })
    const user3 = new User({
     name : "raghu chopra",
     email : "raghuch202@gmail.in",
     age : 66,
    })
user1.save();
user2.save();
user3.save();
