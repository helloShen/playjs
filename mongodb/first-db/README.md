# install Mongodb
Follow the steps of this page:
[Install MongoDB Community Edition on macOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

Then just add the following command line into `~/.zshrc`, to add applications into the environment `PATH`,
```shell
# replace "4.4" with your current mongodb version
export PATH=$PATH:/usr/local/opt/mongodb-community@4.4/bin
```

# connect to one of my database called "sample_supplies" via mongo shell
```
mongo "mongodb+srv://sandbox.31twy.mongodb.net/sample_supplies" --username symantec2
```

# URI of the "sample_supplies" database
```
mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/sample_supplies
```

The meaning of each part:
1. `protocol`: "mongodb+srv"
2. `username`: "symantec2"
3. `password`: "mongomongoose"
4. `cluster name`: "sandbox"
5. `cluster URI`: "sandbox.mongodb.net"
6. `database name`: "sample_supplies"

# dump data from "sample_supplies" database
Dump data in `BSON` format,
```
mongodump --uri "mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/sample_supplies"
```

To further specify a collection and the format(ex: `json`) of data to export,

```
mongoexport --uri "mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/sample_supplies" --collection=sales --out=sales.json
```

# import data in JSON file
Drop first a database and then use dumped backup to restore it.

Restore with `.bson` file,
```
mongorestore --uri "mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/sample_supplies" --drop dump/sample_supplies
```

Restore with `.json` file,
```
mongoimport --uri "mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/sample_supplies" --drop sales.json
```

# connect to `admin`
`admin` is a special administrative database,
```
mongo "mongodb+srv://symantec2:mongomongoose@sandbox.31twy.mongodb.net/admin"
```

# list all database in our cluster
```
show dbs
```

# switch to a specific database
Here we switch to a database called `sample_training`,
```
use sample_training
```

Show collections,
```
show collections
```

# retrieve documents from a collection
Suppose we have switched to our `sample_training` database, the following command retrieve all documents in `zips` collections having the `state` field with value `NY`.
```
db.zips.find({"state": "NY"})
```

To count the number of retrieved documents like this,
```
db.zips.find({"state": "NY"}).count()
```

To make output more easy to read, use `pretty()`,
```
db.zips.find({"state": "NY"}).pretty()
```

Then type `it` to iterate for more documents.

# insert documents into a collection
We are currently in `sample_training` database. 

Insert 1 single new document into `zips` collection like this,
```
db.zips.insert({"code": "H2354B"})
```

Insert multiple documents as an array,
```
db.zips.insert([{"code": "H2354B"}, {"code": "J47D58"}, {"code": "4B6U79"}])
```

# update documents

## `$inc`
```
db.zips.updateMany({"city": "HUDSON"}, {"$inc": {"pop": 10}})
```
The above command increment the `pop` field of every document having `city` filed `HUDSON` by 10.

The `$inc` stands for `increament` in MQL(Mongodb Query Language).

## `$set`
Use `$set` MQL command to directly set the `pop` field of the document having a `zip` code 12354 to 20000.
```
db.zips.updateOne({"zip": "12534"}, {"$set": {"pop": 20000}})
```

## `$push`
```
db.grades.updateOne({"student_id": 250, "class_id": 339}, {"$push": {"scores": {"type": "extra credit", "score": 100}}})
```
This give student#250 a bonus credit of 100 in class#339.

# delete documents
```
db.inspections.deleteMany({"test": 1})
```
Above commend will delete all documents in `inspections` collection which the value of field `test` is 1.

```
db.inspections.drop()
```
will delete the entire `inspections` collection.

# `$and`, `$or`, `$nor`, `$not` operator
The following query can be used to find out: how many CR2 and A81 airplanes come through the KZN airport?
```
db.routes.find({"$and": [{"$or": [{"src_airport": "KZN"}, {"dst_airport": "KZN"}]}, {"$or": [{"airplane": "CR2"}, {"airplane": "A81"}]}]}).count()
```

To check how many businesses in the sample_training.inspections dataset have the inspection result "Out of Business" and belong to the "Home Improvement Contractor - 100" sector?
```
db.inspections.find({"$and": [{"result": "Out of Business"},{"sector": "Home Improvement Contractor - 100"}]}).count()
```

How many companies in the sample_training.companies dataset were

1. either founded in 2004 [and] either have the social category_code [or] web category_code,

2. [or] were founded in the month of October [and] also either have the social category_code [or] web category_code?
```
db.companies.find({"$and": [{"$or": [{"founded_year": 2004},{"founded_month": 10}]},{"$or": [{"category_code": "web"},{"category_code": "social"}]}]}).count()
```

# `$expr`
How many trips started and ended at the same station.
```
db.trips.find({"$expr": {"$eq": ["$start station id", "$end station id"]}}).count()
```

How many companies in the sample_training.companies collection have the same permalink as their twitter_username?
```
db.companies.find({"$expr": {"$eq": ["$permalink", "$twitter_username"]}}).count()
```

# Array
Find the document of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?
```
db.listingsAndReviews.find({"$and": [{"accommodates": {"$gt": 6}},{"reviews": {"$size": 50}}]})
```

```
db.listingsAndReviews.find({"property_type": "House","amenities": "Changing table"}).count()
```

# `$elemMatch`
How many companies in the sample_training.companies collection have offices in the city of Seattle?
```
db.companies.find({"offices": {"$elemMatch": {"city": "Seattle"}}}).count()
```

# `.` notation
How many trips in the sample_training.trips collection started at stations that are to the west of the -74(or less) longitude coordinate?
```
db.trips.find({"start station location.coordinates.0": {"$lte": -74}}).count()
```

How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?
```
db.inspections.find({"address.city": "NEW YORK"}).count()
```

# Aggregation
What room types are present in the sample_airbnb.listingsAndReviews collection?
```
db.listingsAndReviews.aggregate([{$project: {"room_type": 1, "_id": 0}},{$group: {"_id": "$room_type"}}])
```

# `sort()`, `limit()`
In what year was the youngest bike rider from the sample_training.trips collection born?
```
db.trips.find({"birth year": {"$ne": null, "$ne": ""}},{"birth year": 1, "_id": 0}).sort({"birth year": -1}).limit(1)
```

# index
Index the sample_training.routes collection by the src_airport field like this,
```
db.routes.createIndex({ "src_airport": -1 })
```