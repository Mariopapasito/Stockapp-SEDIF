const mongoose = require('mongoose');

const dbconnect = (app) => {

  mongoose
    .connect(`mongodb+srv://MarioIvan:${process.env.MONGO_DB_PASS}@development.b98qzz6.mongodb.net/stock-app?retryWrites=true&w=majority&appName=Development`)
    .then((result)=> {
        
       const PORT = process.env.PORT
       app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    })
    console.log('Conectado a la base de datos')
})
    .catch((err)=> console.log(err));

}

module.exports = dbconnect;
