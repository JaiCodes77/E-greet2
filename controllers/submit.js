import { users } from "../models/students.js";
export const register_post = async(req,res)=>{

    (req.body);

    let userData= {name:req.body.name,email:req.body.mail,AdmissionNumber:req.body.AN,EnrollmentNumber:req.body.EN,DateOfBirth:req.body.DOB};
   
    let admissionnumber = userData.AdmissionNumber
    let Anexists = await users.findOne({AdmissionNumber:userData.AdmissionNumber});
    console.log(Anexists)
    if (Anexists) { 
        res.render("entry",{message: 'user already exists'})
    } 
    else{
        await users.create(userData);
     res.redirect("/"); 
    }
    
} 
