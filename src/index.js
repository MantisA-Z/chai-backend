require("dotenv").config();
const connectDb = require("./db/index");
const app = require('./app');
const PORT = process.env.PORT || 8000;

connectDb()
.then(
    app.listen(PORT, () => console.log(`server started at port: ${PORT}`))
)
.catch(err => console.log(`DataBase connection error: ${err}`));

app.on('error', (err) => {
    console.log(`Server ERROR: ${err}`)
});