import { users } from "../models/students.js"
export const deletedata = async(req,res) => { 
    const admissionnumber = req.body.AN
    return admissionnumber;
}  

export default deletedata;




