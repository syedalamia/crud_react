import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import ShowBooks from './ShowBooks';


class updateBook extends React.Component{
    state={
        id: this.props.location.state.id,
        bookName: this.props.location.state.name,
        author:this.props.location.state.author,
    };


    handleInputs=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }


    // mitul=()=>{
    //     console.log("mishu")
    //     document.getElementById("mishu").innerHTML="sinu";
    // }

    saveData=(e)=>{
      
        e.preventDefault();
        axios.post("/updating",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        console.log(this.props.location.state.name);
        return(
         <div class="reg">
   <div className="container"> 
        <form onSubmit={this.saveData}>
        <div className="reg_text mt-2">
               <h3 className="text-center">Update Book</h3>
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
                <input type="submit" onClick={()=>document.getElementById("hidden_msg").innerHTML="Update Request sent....go back to homepage"} className="btn reg_btn" value="Update Book"/>
                <h3 id="hidden_msg" class="text-danger font-weight-bold text-center mt-5"></h3>
            </div>




        </form>












            </div>



         </div>
         


        )



    }

    

}

export default updateBook;