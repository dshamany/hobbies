let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to ${db.host}:${db.port}`);
});