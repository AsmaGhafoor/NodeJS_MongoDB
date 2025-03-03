const dbConnect = require('./mongodb');

const updateData = async () => {
    let data =await dbConnect();
    let result=data.updateOne(
        {name:'max 5'}, //condition
        {$set:{name: 'max pro 5'}} //update
    );
    console.warn(data);
    if (result.modifiedCount > 0) {
        console.log("✅ Document updated successfully!");
    } else {
        console.log("⚠️ No document found or updated!");
    }

}

updateData();