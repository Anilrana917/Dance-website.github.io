// Instering data in mongo db
use; anilkart
db.items.insertOne({name:"iphone 12", price: 65000, rating: 5, qty: 250, sold: 96})

db.items.insertMany([{name:"iphone 12", price: 65000, rating: 5, qty: 250, sold: 96}, {name:"Samsung G20", price: 60000, rating: 4.5, qty: 150, sold: 86}, {name:"Realme", price: 20000, rating: 3, qty: 250, sold: 116}, {name:"Mi", price: 50000, rating: 4.5, qty: 250, sold: 118}])

// This query will return all the objects with rating equal to 4.5
db.items.find({rating: 4.5})

db.items.find({rating: {$gte: 4.5}})
// And Operater
db.items.find({rating: {$gte: 4.5}, price:{$gt:20000}})

// Delete data in mongo Database
show; dbs
use; anilkart
show; collections

db.items.find()

db.items.deleteOne({price: 65000}); deleteOne; will; delete first; entry in of; multiple; entry

db.items.deleteMany({price: 65000}); deleteMany; will; delete everything

// Updating data in mongo Database
show; dbs
use; anilkart
show; collections

db.items.updateOne({name:"Mi"}, {$set: {price:2000}}); update; the; price; of; Mi

db.items.updateMany({name:"Mi"}, {$set: {price:2000}}); update; many; entrys