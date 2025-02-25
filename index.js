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