const {Router}=require("express");
const mainRouter=Router();

const {getAllUsers,AddAUser,getUserDetails}=require("../db/queries");

//Main page 
mainRouter.get("/",(req,res)=>res.render("index",{messages:getAllUsers()}));
//Add note
mainRouter.get("/new",(req,res,next)=>res.render("form"));
mainRouter.post("/new",async (req,res)=>{
  console.log(req.body);
  
  const text=req.body.text;
  console.log(text);
  const user=req.body.user;
  console.log(user);

  const date=new Date()
  await AddAUser({text,user,date});
  res.redirect("/");
});

mainRouter.get("/text/:i",(req,res)=>{
  res.render("text",{messages:getUserDetails(req.params.id) });
  console.log(req.params.i);
});
module.exports=mainRouter;