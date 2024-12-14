const {Pool}=require('pg');
require('dotenv').config();

try{
module.exports = new Pool({
    //connectionString: "postgresql://postgres:pbhYwobsqOSmUZhxQGbpeDBBNZrgYumj@postgres.railway.internal:5432/railway",
    host: "localhost",
    user: "postgres",
    database: "notes",
    password: "postgres",
    port: 5432 
  });
}
catch(e){
    console.log("Error- ",e);

}

