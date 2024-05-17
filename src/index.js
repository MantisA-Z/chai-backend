require("dotenv").config();
const app = require('./app')
const {connectingDatabase} = require("./db/index");
const PORT = process.env.PORT || 8000;

connectingDatabase()
.then(
    app.listen(PORT, () => console.log(`server started at port: ${PORT}`))
)
.catch(err => console.log(`DataBase connection error: ${err}`));

app.on('error', (err) => {
    console.log(`Server ERROR: ${err}`)
});