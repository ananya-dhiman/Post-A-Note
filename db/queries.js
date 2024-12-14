const pool=require("./pool");


async function getAllUsers(){
    const {rows}=await pool.query("SELECT * FROM notetable;");
    console.log(rows);
    return rows;

}
async function AddAUser({text,user,date}){
    await pool.query("INSERT INTO notetable (text,name,added) VALUES ($1,$2,$3); ",[text,user,date]);
    console.log("INSERTED!");

    
}

async function getUserDetails(id){
    console.log("Id in details",id);
    const {rows}=await pool.query("SELECT * FROM notetable WHERE id = $1",[id]);
    console.log("Getting Details....");
    console.log(rows);
    return rows;

}

module.exports={
    getAllUsers,
    AddAUser,
    getUserDetails

}