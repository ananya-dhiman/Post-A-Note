const {Client} =require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS notetable(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(300),
    name VARCHAR(50),
    added VARCHAR(100)  
);

INSERT INTO notetable (text, name, added)
VALUES
    ('Hi there!', 'Amando', 'Fri Dec 13 2024 12:34:38 GMT+0530 (India Standard Time)'),
    ('Hello World!', 'Charles', 'Fri Dec 13 2024 12:34:38 GMT+0530 (India Standard Time)');
`;

async function main(){
    console.log("seeding...");
    const client=new Client({
      host: "localhost",
      user: "postgres",
      database: "notes",
      password: "postgres",
      port: 5432 
    }); 
    await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();