const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    router = require("./routes/index");

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(express.static("public")); //In order to use static file

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs"); //To use EJS


const mongodbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/yummify-vue"; 
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('open', () => {
    console.log('Connected to mongoDB');
});
db.on('error', (error) => {
    console.log(error)
});

app.use('/', router);   

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("Welcome to your Server.")
})

app.listen(app.get("port"), () => {
		console.log(`Server running at http://localhost:${ app.get("port")}`);
});

module.exports = app; 