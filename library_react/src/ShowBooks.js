import React from "react";
import {Link} from "react-router-dom"
import updateBook from "./updateBook"
const ShowBooks=(props)=>{
  //deleting function here
  const deleteBook=(id)=>{
    props.delete(id);
    console.log("book deleted");
  }


//updating function here
  const updaeBook=(id,bookName,author)=>{
    props.delete(id);
    //new writing props passing
    // console.log(bookName);
    // props.update(id,bookName,author);
    // <updateBook id={id} bookName={bookName} author={author}/>
    // console.log("book updated");

    // return(
    //   <div>
   
    
    //     <updateBook id={id} bookName={bookName} author={author}/>
  
    //   </div>
    // )
  }
    return(
    
        <div className="book_showing">



      <div className="reg_text">
              <h3 class="text-center">List of Book</h3>
               

        </div>
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
              <table className="table mt-2">
                  <tr class="text-center">

                     <th>Book Name</th>
                     <th>Author</th>
                    <th>Actions</th>
                  </tr>


                {props.books.map((book)=>(
                  <tbody class="text-center" key={book.id}>

                    
                     
                   <tr >
   
                   <td>{book.bookName}</td>
                   <td>{book.author}</td>
    <td>
      
        <button type="button" onClick={()=>deleteBook(book.id)} className="btn btn-table mr-2">
                  Delete
        </button>

{/* <Link to="/mila">
        <button type="button" onClick={()=>updaeBook(book.id,book.bookName,book.author)} className="btn btn-primary">
                 update
        </button>
 </Link>  */}


{/* <Link to="/mila">
        <button type="button"  className="btn btn-primary">
                 update
        </button>
 </Link>  */}



 <Link to={{
  pathname: "/mila",
  state: {
    id:book.id,
    name: book.bookName,
    author:book.author
  }
}}>
  
  <button type="button"  className="btn btn-table mr-2">
                 update
        </button>
  
  
  </Link>



{/* <button type="button" onClick={()=>updaeBook(book.id,book.bookName,book.author)} className="btn btn-primary">
                 update
        </button> */}


        {/* <button type="button" onClick={()=>updatingBook(book.id,book.bookName,book.author)} className="btn btn-primary">
                  update
        </button> */}


    </td>
  </tr>

                  </tbody>
    ))}
            </table>


              </div>


            </div>



            </div>








          




        </div>
            
     
        
    )
}
export default ShowBooks;