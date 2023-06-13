
import mongoose from 'mongoose';



const port = 5000;



//database connection
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("Database connected successfully");

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(`Failed to connect database`, err);
    }
  }
bootstrap();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

