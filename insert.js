// const dbConnect = require('./mongodb');
import dbConnect from './mongodb';

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            { name: 'note 5', brand: 'vivo', price: 420, category: 'mobile' },
            { name: 'vivo A5', brand: 'vivo', price: 520, category: 'mobile' },
            { name: 'samsung J5', brand: 'vivo', price: 620, category: 'mobile' }
        ]
    )
    if (result.acknowledged) {
        console.log("data inserted");
    }
    console.log(result.acknowledged)
}

insertData();