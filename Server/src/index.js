let http = require("http")

const server = http.createServer((req,res)=>{
   res.setHeader('Access-Control-Allow-Origin', '*') 

   if(req.url.includes("/rickandmorty/character")){
    let id = req.url.split('/')
    id = id[id.length-1]

    let user = data.find(char => char.id === id)
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(user)

   }
})

server.listen(3001,"localhost")