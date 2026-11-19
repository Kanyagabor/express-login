import express from "express";
import 'dotenv/config';
import login from "./routes/login.js";
import profil from "./routes/profil.js";
import user from "./routes/user.js";
import regisztracio from "./routes/registration.js";
import users from "./routes/users.js";


const app= express();


app.use(express.json()); // ez a bodyt alakítja jsonné

app.use("/api/registration",regisztracio);
app.use("/api/login",login);
app.use("/api/profil",profil);
app.use("/api/user",user);
app.use("/api/users",users);



const PORT=Number(process.env.APP_PORT) ?? 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})