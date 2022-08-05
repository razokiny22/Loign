const controller = require('./controller')
const route = (req,res)=>{

   if(req.method=='POST'){
       if(req.url == '/login'){
           controller.UserLogin(req,res)
       }else if(req.url=='/register'){
           controller.Register(req,res)
       } else if(req.url=='/page'){
        controller.GetUser(req,res)
       }else{
        controller.PageNotFound(res)
       }
   }
   else{
        controller.PageNotFound(res)
    }
}
module.exports=route