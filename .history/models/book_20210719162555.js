var mongoose=require("mongoose");
//DEFINING THE BOOK MODEL
var bookSchema=new mongoose.Schema({
    title: 
    //TODO: access all books from the book model and render book list page
    /*TODO: DEFINE the following attributes-
    title, genre, author, description, rating (out of 5), mrp, available_copies(instances).
     */
})
module.exports=mongoose.model("Book",bookSchema);