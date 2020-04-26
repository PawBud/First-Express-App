var express=require("express");
var app=express();

app.get("/",function(req,res)
{
    res.send("Hi there ,welcome to my assignment");
});

app.get("/speak/cow",function(req,res)
{
    res.send("The Cow says,'Moo'");
});

app.get("/speak/pig",function(req,res)
{
    res.send("The Pig says ,'Oink'");
});

app.get("/speak/dog",function(req,res)
{
    res.send("The dog says,'Woof Woof!!'");
});

app.get("/repeat/hello/3",function(req,res)
{
    res.send("hello hello hello");
});

app.get("/repeat/hello/5",function(req,res)
{
    res.send("hello hello hello hello hello");
});

app.get("/blah/2",function(req,res)
{
    res.send("blah blah");
});

app.get("*",function(req,res)
{
    res.send("Sorry, page not found..... What are you doing in your life?");
});

app.listen(3000,function()
{
    console.log("The server output has started");
});