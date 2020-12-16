import React from "react";
import axios from 'axios';
import "./css/style.css";



class AddBook extends React.Component{
    state={
        id: "",
        bookName:"",
        author:""
    };


    handleInputs=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    saveData=(e)=>{
        e.preventDefault();
        this.props.addBook(this.state);
        axios.post("/insertion",this.state) //store books in db
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className="reg">
                    <div className="container"> 
        <form onSubmit={this.saveData}>
        <div className="reg_text mt-2">
               <h3 className="text-center">Registration Form</h3>
            </div>


            <div className="form-group">
                <input type="text" 
                name="id" 
                className="form-control"
                placeholder="Book id"
                value={this.state.id}
                onChange={this.handleInputs}
                required
                />
            </div>
        

            <div className="form-group">
                <input type="text" 
                name="bookName" 
                className="form-control"
                placeholder="Book Name"
                value={this.state.bookName}
                onChange={this.handleInputs}
                required
                />
            </div>

            <div className="form-group">
                <input type="text"
                 name="author" 
                className="form-control"
                placeholder="Author Name"
                value={this.state.author}
                onChange={this.handleInputs}
                required
                />
            </div>

            <div className="form-group text-center mt-5">
                <input type="submit" className="btn reg_btn" value="Add Book"/>
            </div>




        </form>

            </div>


            </div>
        
         


        )



    }



}

export default AddBook;