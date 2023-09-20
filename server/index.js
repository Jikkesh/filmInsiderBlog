import express  from "express"; 
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/users.js";

const app = express();
app.use(cors());

app.use(express.json({limit:"30mb" , extended:true}));
app.use(express.urlencoded({limit:"30mb" , extended:true}));


app.get("/", (req,res) => {
res.send("My Name is Billa");
});

app.use("/users" , router);
app.use("/data" , router);

const CONNECT_URL =  "mongodb+srv://JikkeshKumar:jikkeshwaR3031@cluster0.wmwfh0l.mongodb.net/FilmInsider?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL ,{ useNewUrlParser: true , useUnifiedTopology:true})

.then(()=> app.listen(PORT, () =>{console.log(`Server is runing: ${PORT}`)}))
.catch((err) => console.log("Error is here at server" + err.message));





