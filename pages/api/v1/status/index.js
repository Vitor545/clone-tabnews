import database from "../../../../infra/database";

async function status(request, response) {
  const reposta = await database.query("select 1 as sum");
  console.log(reposta.rows);
  response.status(200).send("Olá api");
}

export default status;
