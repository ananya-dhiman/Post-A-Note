const {Client} =require("pg");

const SQL= `CREATE TABLE IF NOT EXISTS notetable(
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      text VARCHAR(300),
      user VARCHAR(50),
      added VARCHAR(100),
);
INSERT INTO noteTable (text,user,added)
VALUES
('Hi there!','Amando','Fri Dec 13 2024 12:34:38 GMT+0530 (India Standard Time)')
('Hello World!','Charles','Fri Dec 13 2024 12:34:38 GMT+0530 (India Standard Time)'
);`

async function main(){
    console.log("seeding...");
    const client=new Client({
        connectionString:"postgresql://postgres:pbhYwobsqOSmUZhxQGbpeDBBNZrgYumj@postgres.railway.internal:5432/railway",
    }); 
    await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();