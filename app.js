
const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
// const {config}=require("../config/secret")


// דואג שהאפליקציה תכיר את הקובץ אינוורמינט שמכיל 
// משתנים סודיים והגדרות של השרת

const {routesInit} = require("./routes/config_routs")
require("./db/mongoConnect");

const app = express();

// נותן גישה לכל הדומיינים לגשת לשרת שלנו
app.use(cors());
// כדי שנוכל לקבל באדי
app.use(express.json());
// הגדרת תקיית הפאבליק כתקייה ראשית
app.use(express.static(path.join(__dirname,"public")))

routesInit(app);

const server = http.createServer(app);

console.log("env",process.env.TEST, process.env.USER_DB)

let port = process.env.PORT || 3000
server.listen(port);
