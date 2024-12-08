const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const {Router}=require("express");
const mainRouter=Router();

//Main page 
mainRouter.get("/",(req,res)=>res.render("index",{messages:messages}));
//Add note
mainRouter.get("/new",(req,res,next)=>res.render("form"));
mainRouter.post("/new",(req,res)=>{
  messageText=req.body.text;
  console.log(messageText);
  nameText=req.body.user;
  console.log(req.body);
  messages.push({text:messageText,user:nameText,added:new Date()});
  res.redirect("/");
});

mainRouter.get("/text/:i",(req,res)=>{
  res.render("text",{messages:messages,i:req.params.i})
  console.log(req.params.i);
}

);
module.exports=mainRouter;