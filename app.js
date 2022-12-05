const exp=require('constants');
const express=require('express');
const fs=require('fs');
const path=require('path');

const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded());
const home=fs.readFileSync('public/hotel.html');
app.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html')
    res.send(home)
});

app.use(express.static(path.join(__dirname,'public','about')));
const about=fs.readFileSync('public/about/about.html');
app.get('/about',(req,res)=>{
    
    res.setHeader('Content-type','text/html')
    res.send(about)
});

app.use(express.static(path.join(__dirname,'public','menu')));
const menu=fs.readFileSync('public/menu/menu.html');
app.get('/menu',(req,res)=>{
    
    res.setHeader('Content-type','text/html')
    res.send(menu)
});

app.use(express.static(path.join(__dirname,'public','contact')));
const contact=fs.readFileSync('public/contact/contact.html');
app.get('/contact',(req,res)=>{

    res.setHeader('Content-type','text/html')
    res.send(contact)
});

app.use(express.static(path.join(__dirname,'public','submit')));
const submit=fs.readFileSync('public/submit/submit.html');
app.post('/submit',(req,res)=>{
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.Suggestion)
    const mess=`name:${req.body.name} \nemail:${req.body.email} \nsuggestion:${req.body.Suggestion}\n\n`;
    fs.appendFileSync('contact.txt',mess)
    res.setHeader('Content-type','text/html')
    res.send(submit)
});

app.listen(port,()=>{
    console.log("running at",port)
});
