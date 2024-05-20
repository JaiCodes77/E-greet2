import { users } from "../models/students.js"; 
import { deletedata } from "./delete.js";
export const delete1 = async (req,res)=>{  
    const AN = deletedata();
    const user = await users.findOne(AN);
    let name = user.name;
    let email = user.email;
    let dateofbirth = user.DateOfBirth;
    let enrollmentnumber = user.EnrollmentNumber;
    let admissionnumber = user.AdmissionNumber; 
    res.render("delete",{name,email,dateofbirth,enrollmentnumber,admissionnumber})
} 