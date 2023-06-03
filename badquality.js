/*//this is very tedious and code quality is bad so we use express.js

import htt from "http";
import { day } from "./importer.js";
//import * from ./importer.js to import all things in that
console.log(day())
const server =htt.createServer((req,res)=>{
    if(req.url==="/about"){
        res.end(`<h1>hello hey today your %of having a sucessful day is ${day()}</h1>`);
    }
    else if(req.url==="/"){
        res.end(`<h1>home page</h1>`);
    }
    else{
        res.end(`<h1>Ooops cant find that</h1>`)
    }
    
});
server.listen(3000,()=>{
    console.log('server is alright')

})
//const owner=require('./importer')
//console.log(owner)

*/