import Note from "../models/note.js"

/*these are all the basic get,new,update,delete functions from the database
controls what each request do*/
export async function getAllNotes(_,res){
    try {
      const notes=await Note.find().sort({createdAt:-1})//-1 from newest one || 1 is from oldest
      res.status(200).json(notes)
    } catch (error) {
     console.error("error in getallnotes controller",error)

     res.status(500).json({message:"internal server error"})
    }
}

export async function getNoteById(req,res){
    try {
      const noteById=await Note.findById(req.params.id)
       if (!noteById) {
               return res.status(404).json({message:"note not found"})
          } 
      res.status(200).json(noteById)
    } catch (error) {
     console.error("error in getNoteById controller",error)

     res.status(500).json({message:"internal server error"})
    }
}

export async function createNote(req,res){
     try {
          const {title,content}=req.body;
          const note=new Note({title,content})

          const savedNote=await note.save()

          res.status(201).json(savedNote)
     } catch (error) {
          console.error("error in createnote controller",error)

          res.status(500).json({message:"internal server error"})
     }
}

export async function updateNote(req,res){
     try {
          const {title,content}=req.body
          const updatedNote =await Note.findByIdAndUpdate(
               req.params.id,
               {title,content},
               {new:true}
          )
          if (!updatedNote) {
               return res.status(404).json({message:"note not found"})
          } 

          res.status(200).json(updatedNote)
     } catch (error) {
              console.error("error in updatenote controller",error)

          res.status(500).json({message:"internal server error"})
     }
}

export async function deleteNote(req,res){
     try {
          const deletedNote =await Note.findByIdAndDelete(
               req.params.id,
          )
          if (!deletedNote) {
               return res.status(404).json({message:"note not found"})
          } 

          res.status(200).json({message:"note deleted"})
     } catch (error) {
              console.error("error in deleteNote controller",error)

          res.status(500).json({message:"internal server error"})
     }
}