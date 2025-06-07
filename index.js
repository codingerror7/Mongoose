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


const mongoose = require("mongoose");

main().then(()=>{
    console.log("SUCCESSFULLY RESOLVED!");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    author : {
        type : String
    },
    price : {
        type : Number
    }
})
const Reader = mongoose.model("Reader",bookSchema);
Reader.deleteMany({title : "ZERO TO ONE"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
Reader.find({}).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})
let reader1 = new Reader({
    title : "THE SUBTLE ART OF NOT GIVING A F*CK!",
    author : "Mark Manson",
    price : 1200
});
let reader2 = new Reader({
    title : "RICH DAD POOR DAD",
    author : "ROBERT KIYOSAKI",
    price : 1500
});
let reader3 = new Reader({
    title : "ZERO TO ONE",
    author : "PETER THIEL",
    price : 2000
})
 reader1.save();
 reader2.save();
 reader3.save();



//EXTRA PRACTICE CODE:
// const mongoose = require("mongoose");

// main().then(()=>{
//     console.log("SUCCESSFULL!");
// }).catch((rej)=>{
//     console.log(rej);
// })

// async function main(){
//     await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// const userSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     age : Number,
// });

//  const User = mongoose.model("User",userSchema);
//  User.find({}).then((res)=>{
//     console.log(res);
//  }).catch((rej)=>{
//     console.log(rej);
//  })
//  User.deleteMany({name : "sahil khanna"}).then((res)=>{
//     console.log(res);
//  }).catch((rej)=>{
//     console.log(rej);
//  })

//  User.updateMany({name : "sujal saraswat"},{age : 9300446947}).then((res)=>{
//     console.log(res);
//  }).catch((rej)=>{
//     console.log(rej);
//  })

//  User.find({}).then((res)=>{
//     console.log(res);
//  }).catch((rej)=>{
//     console.log(rej);
//  })
// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })
// User.findOne({name : "abhay singh"}).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })


// let user1 = new User({
//     name : "sujal saraswat",
//     email : "saraswatsujal@gmail.com",
//     age : 21,
// });
// let user2 = new User({
//     name : "sahil khanna",
//     email : "khanna6776@gmail.com",
//     age : 90,
// })
// let user3 = new User({
//     name : "aman chopra",
//     email : "chopraman@gmail.in.org",
//     age : 33,
// })
// let user4 = new User({
//     name : "abhay singh",
//     email : " singhabhay121@gmail.com",
//     age : 44,
// })
// user1.save();
// user2.save();
// user3.save();
// user4.save();


