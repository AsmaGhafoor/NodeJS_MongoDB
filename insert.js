// const dbConnect = require('./mongodb');

// const insert = async () => {
//     const db = await dbConnect();
//     // console.log(db)
//     const result = await db.insert(
//         { name: 'note 5', brand: 'vivo', price: 420, category: 'mobile' },
//         { name: 'vivo A5', brand: 'vivo', price: 520, category: 'mobile' },
//         { name: 'samsung J5', brand: 'vivo', price: 620, category: 'mobile' }
//     )
//     if (result.acknowledge) 
//     {
//         console.log("data inserted");
//     }
// }

// insert();

const dbConnect = require('./mongodb');

const insert = async () => {
    try {
        const db = await dbConnect();

        // Make sure db is not null or undefined
        if (!db) {
            console.error("Failed to connect to database");
            return;
        }

        // Use insertMany for multiple documents
        const result = await db.insertMany([  
            { name: 'note 5', brand: 'vivo', price: 420, category: 'mobile' },
            { name: 'vivo A5', brand: 'vivo', price: 520, category: 'mobile' },
            { name: 'samsung J5', brand: 'vivo', price: 620, category: 'mobile' }
        ]);

        // Check if the insertion was successful
        if (result.acknowledged) {
            console.log("Data inserted successfully");
        } else {
            console.log("Data insertion failed");
        }

    } catch (error) {
        console.error("Error during insert:", error);
    }
};

insert();
