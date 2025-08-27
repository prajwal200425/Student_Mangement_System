import express from "express"
import { AddStudent, deleteStudent, getAll, getOne, updateStudent } from "../Controller/StudController.js";
import userAuth from "../Middleware/Auth.js";

const router = express.Router();

router.post("/add-stud",userAuth, AddStudent);
router.get("/all-records" ,userAuth, getAll);
router.get("/:id" , userAuth, getOne);
router.put("/update/:id",userAuth, updateStudent);
router.delete("/delete/:id" ,userAuth, deleteStudent);


export default router;