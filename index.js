const dbConnect = require('./mongodb')

dbConnect().then((resp) => {
    // console.warn(resp.find().toArray())
    // resp.find({name:'a'}).toArray.then((data) => {
    //     console.warn(data);
    // })
    resp.find({name: 'a'}).toArray().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(err);
    });
    
})
console.warn(dbConnect());

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();