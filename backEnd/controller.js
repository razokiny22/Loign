const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const headers = require('./headers')

const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database :'login_sys'
 })
con.connect((err)=>{
    if(err) throw err
    console.log("db connected")
 })

const controller = {
 
    UserLogin : (req,res)=>{
        let tabChunk = []
        req.on('data',(chunk)=>{
            tabChunk.push(chunk)
        })
        req.on('end', ()=>{
            let BufferData = Buffer.concat(tabChunk)
            let StringData = BufferData.toString("utf-8")
            let dataJson = JSON.parse(StringData)
            console.log(dataJson)
            con.query("select username,password from Users where username = ? AND password=?",[dataJson.username,dataJson.password],(err,result)=>{
                    result=JSON.parse(JSON.stringify(result)) 
                    if(err){
                       
                        res.writeHead(403,{'content-type':'text/plain',...headers})
                        res.write(JSON.stringify({success:false,message:"Username not found"}))
                        res.end()
                    } 
                    if(result.length==0){
                        res.writeHead(403,{'content-type':'text/plain',...headers})
                        res.write(JSON.stringify({success:false,message:"password incorrect"}))
                        res.end()
                    }else{
                        let token = jwt.sign(
                            { username: result[0].username  },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '0.5h' }
                        )
                        res.writeHead(202,{'content-type':'text/plain',...headers,"Authorization": 'bearer ' + token})
                        res.write(JSON.stringify({success:true,
                            name:dataJson.username,
                            token: token}))
                        res.end()
                    }
                
                })
            })
        
    },
    Register : (req,res)=>{
        let tabChunk = []
        req.on('data',(chunk)=>{
            tabChunk.push(chunk)
        })
        req.on('end', ()=>{
            let BufferData = Buffer.concat(tabChunk)
            let StringData = BufferData.toString("utf-8")
            let dataJson = JSON.parse(StringData)
            console.log(dataJson)
            con.query("INSERT INTO Users (username,email,password,role) values (?,?,?,?)",[dataJson.username,dataJson.email,dataJson.password,dataJson.role],(err)=>{
                console.log(err)    
                if(err){ 
                       
                        res.writeHead(409,{'content-type':'text/plain',...headers})
                        res.write(JSON.stringify({success:false,message:"Incorrect"}))
                        res.end()
                    }
                    
                res.writeHead(201,{'content-type':'text/plain',...headers})
                res.write(JSON.stringify({success:true,username:dataJson.username}))
                res.end()
                
                
                })
            })
        
    },
    PageNotFound : (res) =>{
        res.writeHead(404,{'content-type':'text/plain',...headers})
        res.write(JSON.stringify({success:false,message:"Page not found"}))       
        res.end()
    },
    GetUser : (req,res) => {
        let tabChunk = []
        req.on('data',(chunk)=>{
            tabChunk.push(chunk)
        })
       
        req.on('end',()=>{
    
            let BufferData = Buffer.concat(tabChunk)
            let StringData = BufferData.toString("utf-8")
            
            let decoded = jwt.verify(StringData,'RANDOM_TOKEN_SECRET')
            let username = decoded.username
            con.query('select username from Users where username = ?',[username],(err,result)=>{
                result = JSON.parse(JSON.stringify(result))
                console.log(result)
                if(err){
                    res.writeHead(401,{'content-type':'text/plain',...headers})
                    res.write({success:false,message:"authentification failed"})
                    res.end()
                    console.log("je suis ici")
                }
                if(result.length==0){
                    res.writeHead(401,{'content-type':'text/plain',...headers})
                    res.write({success:false,message:"user not found"})
                    res.end()
                }else{
                    con.query('select id,username,email,role from Users',(err,result)=>{
                        result = JSON.parse(JSON.stringify(result))
                        console.log(result)
                        if(err){
                          
                            res.writeHead(404,{'content-type':'text/plain',...headers})
                            res.write({success:false,message:"authentification failed"})
                            res.end()
                        }
                        console.log("je suis la")
                        res.writeHead(200,{'content-type':'text/plain',...headers})
                        res.write(JSON.stringify({success:true,data:result,user:username}))
                        res.end()
                        

                    })
                }
            })
        })        
      
             
    }
}
module.exports=controller