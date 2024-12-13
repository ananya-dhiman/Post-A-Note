const pool=require("./pool");

async function getAllUsers(){
    const {rows}=await query("SELECT * FROM notetable;");
    console.log(rows);
    return rows;

}
async function AddAUser({text,user,date}){
    await query("INSERT INTO notetable (text,user,added) VALUES ($1,$2,$3); ",[text,user,date]);
    console.log("INSERTED!");

    
}

async function getUserDetails(id){

    const {row}=await query("SELECT * FROM USERNAME WHERE id = $1",[id]);
    console.log(row);
    return row;

}

module.exports={
    getAllUsers,
    AddAUser,
    getUserDetails

}