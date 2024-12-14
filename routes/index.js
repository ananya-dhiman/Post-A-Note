const {Router}=require("express");
const mainRouter=Router();

const {getAllUsers,AddAUser,getUserDetails}=require("../db/queries");

//Main page 
mainRouter.get("/",async (req,res)=>{
  console.log("Helooooooooooooooooooooooo")
  console.log(await getAllUsers());
  res.render("index",{messages:await getAllUsers()});

});
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

mainRouter.get("/text/:id",async(req,res)=>{
  console.log(req.params.id);
  console.log("See This");
  console.log(await getUserDetails(req.params.id));
  res.render("text",{message:await getUserDetails(req.params.id) });
  
});
module.exports=mainRouter;