import app from "./server.js";
import config from './config.js'

app.listen(config.port,()=>{
    console.log(`Servidor rodando na porta ${config.port}`)
})