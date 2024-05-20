import { name } from "ejs";
import mongoose from "mongoose"; 

const studentschema = new mongoose.Schema
({
 EnrollmentNumber : Number,
 AdmissionNumber : String,
 name : String,
email : String,
 DateOfBirth: String, 
 passwords : String
}) 
export const users = mongoose.model("studentdata",studentschema);