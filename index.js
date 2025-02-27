const dbConnect = require('./mongodb')

// dbConnect().then((resp) => {
//     // console.warn(resp.find().toArray())
//     resp.find({name:'nord'}).toArray.then((data) => {
//         console.warn(data);
//     })
// })
// console.warn(dbConnect());

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();




// const dbConnect = require('./mongodb')

// dbConnect().then((resp) => {
//     resp.find({name: 'i phone'}).toArray().then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.error(err);
//     });
    
// })
// console.warn(dbConnect());

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find({name:'i phone'}).toArray();
//     console.log(data);
// }

// main();