const express =require ("express");
const app=express();
const path=require ("path");
const port=2110;

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));

app.use(express.static("public"));

app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("homepg");
});

app.get("/main",(req,res)=>{
    res.render("sign");
});
app.get("/sign",(req,res)=>{
    res.render("card");
});


app.get("/checkin", (req,res)=>{
    res.render("checkin");
});

app.get("/homepg",(req,res)=>{
    res.render("homepg");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/about",(req,res)=>{
    res.render("about");
});


app.get("/checkin", (req, res) => {
    res.render("checkin");
});

app.get("/submit", (req, res) => {
    res.render("submit");
});

app.get("/talk", (req, res) => {
    res.render("talk");
});

app.get("/appointment", (req, res) => {
    res.render("appointment");
});

app.get('/resource', (req, res) => {
    res.render('resource'); // resource.ejs
});


app.get("/forum", (req, res) => {
    res.render("forum");
});
