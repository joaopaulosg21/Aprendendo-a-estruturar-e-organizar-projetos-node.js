import "dotenv/config"
export default {
    port:process.env.PORT,
    database:'projetos',
    username:'root',
    password:process.env.PASSWORD,
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    table:process.env.TABLE
}