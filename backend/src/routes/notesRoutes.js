import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesControllers.js";
const router=express.Router();
//routes for all the requests from database
router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);


export default router