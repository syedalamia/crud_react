
import ShowBooks from './ShowBooks';
import axios from "axios";

import AddBook from "./addBook";

import React, { Component } from 'react'

export default class todoList extends Component {
    state={
        // bookList:[
        //     {id:"134",bookName:"php",author:"author1"},
        //     {id:"2",bookName:"java",author:"author2"}
        // ]
        bookList:[]
        
    }

    storeBook=(bookInfo)=>{
        this.setState({bookList:[...this.state.bookList,bookInfo]});
    }
//book removing area
removeBook=(id)=>{
    const filterdBooks=this.state.bookList.filter((book)=>book.id!==id);
    this.setState({bookList:filterdBooks})
    // axios.post("/deletion?language={id}",id) //problematic delete area

     axios.post("/deletion",id)

    // axios.post("/deletion", { //one of the best
    //     language : id,
    //     })

    

// axios({
//     method: 'post', //danger area
//     url: '/deletion',
//     data: {
//        ID: {id}
 
   
//     }
//   })
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
}

  
    componentDidMount(){
        axios.get("/home").then(response=>{
            this.setState({bookList:response.data})
        });
    }


//filteering hoi showbook e
    render() {
        return (
            <> 
            <div>
                
                <AddBook addBook={this.storeBook}/> 
                <ShowBooks books={this.state.bookList} delete={this.removeBook} />   
            </div>
            </>
        )
    }
}


