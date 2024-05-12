Database - Group of Collections
Collection - Group of Documents

# show all databses

show dbs

# create new database

use <db_name>

# show collections

show collections

# drop a collection

db.<collection_name>.drop()

# create new collection named students

- db.createCollection("students")

- db.createCollection("teachers",{capped:true,size:1024000, max:100},{autoIndexID:false})

  capped : true indicates this colelction should be of maximum size
  minimum size must be specified if capped is true
  size : 1,024,000 -> 10MB (1000 \* 1024)
  max : 100 -> 100 documents

# drop a database

db.dropDatabase()

# create a new document in a collection

db.<colection_name>.insertOne({
name : "value",
prop-2:value-2
})

# insert multiple documents in a collection

db.<colection_name>.insertMany([{
name : value1,
prop-2:value-2
},{
name : value2,
prop-2:value-2
}])

# find documents of a collection

db.<collection_name>.find()

# datatypes

string
integer
doubles(float)
boolean
Date Objects
null : no value
field(arrays)
nested documents

# sorting and limiting

db.<collection_name>.find().sort({field_name:1/-1}) 1 - ascending, -1 - descending

db.<collection_name>.find().limit(<number_of_documents>)

# find method

db.<collection_name>.find({query},{projection})

query example : {query}

db.<collection_name>.find({key1 : value1, key2 : value2}) ; similar to WHERE clause in SQL

projection example : {projection} ; similar to selected columns in SQL ; looking for specific fields

db.<collection_name>.find({},{name:true})

- empty query ({}) indicates return all documents
- {id:false, name:true} indicates return only name field of the document and dont return id

# update documents

db.<collection_name>.updateOne(filter,update)

example :

- db.students.updateOne({name:"Doutei"},{$set:{fullTime:true}})

firsty find document with name "Doutei" and change its EXISTING property fullTime to true, fullTime must be present in the document
better to find by id

- db.students.updateOne({name:"Doutei"},{$unset:{fullTime:""}})

  removes the fullTime property

db.<collection_name>.updateMany(filter,update)

example :

- db.students.updateMany({},{$set:{fullTime:true}})

if there is no fullTime field, it wil be created

# add a field to a document if it doesnt exists

example :

- db.students.updateMany({fullTime:{$exists:false}},{$set:{fullTime:true}})

{fullTime:{$exists:false}} -> does the fullTime  fielsd not exist?
{$set:{fullTime:true}} -> add fullTime field based on the filter criteria which is, in this case, {fullTime:{$exists:false}}

# deleting

db.<collection_name>.deleteOne(filter)
db.<collection_name>.deleteMany>(filter)

example:

- db.students.deleteOne({name:"Megan"})
- db.students.deleteMany({fullTime:false})

- db.students.deleteMany({registerDate:{$exists:false}})
  deletes any documents that doesnt have the registerDate field

# comparision operators

denoted with the $ sign
$ne -> not equal
$lt -> less than
$lte -> less than or equal
$gt -> greater than
$gte -> greater than or equal
$in -> matches all documents having this criteria
$nin -> matches all documents not having this criteria

example :

- db.<collection_name>.find({name:{$ne:"Megan"}}) $
  returns all students whose name not equals to name Megan

- db.students.find({age:{$lt:20}})
  returns all students whose age is less than 20

- db.<collection_name>.find({gpa:{$gte:3,$lte:4}})
  return all students whose gpa is grater than equals to 3 and less than equals to 4

- db.<collection_name>.find({name:{$in:["Megan","Marianne"]}})
  return all students whose name is Megan or Marianne

- db.<collection_name>.find({name:{$nin:["Megan","Marianne"]}})
  return all students whose name is not Megan or Marianne

# logical operators

$and

- db.students.find({$and:[{fullTime:true}, {age:{$lte:20}}]}) $
  return students having fullTime as true and age less than equal to 20
  {fullTime:true}, {age:{$lte:20}}; both these conditions must be true

$or

- db.students.find({$or:[{fullTime:true}, {age:{$lte:20}}]}) $
  {fullTime:true}, {age:{$lte:20}}; at lease on of these conditions must be true

$nor //like NOR Gate; both case must be false to return true

- db.students.find({$nor:[{fullTime:true}, {age:{$lte:20}}]}) $
  {fullTime:true}, {age:{$lte:20}}; both conditions must be false

$not

- db.students.find({age:{$not:{$gte:30}}}) $
  any student not greater than equal to 30
  returns fields having null value as well

# indexes

- db.students.find({name:"Megan"}).explain("executionStats")

- db.students.createIndex({name:1}) 1->ascending, -1->descending
  -> return name_1, this is the name of the index

// get all indexes

- db.students.getIndexes()

// drop and index

- db.students.dropIndex("name_1")
