import React, { Component } from "react";
import friends from "./friends.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from "./components/table"
import SearchBox from "./components/SearchBox"
import Table from 'react-bootstrap/Table'


class App extends Component {
  // sets the state to the friends.json array
  state = {
    original: friends,
    friends: friends,
    // true = ascending    false = descending
    sort: true,
    name:true,
    location:true,
    occupation: true
  };

// Sort on any header column
// label is the text passed in from the onclick event
// use bracket notation for objects
  handleSort = (label) => {
    console.log("clicked", label)
    let sortFriends = this.state.friends
    // if the state of name, location, occupation is true, then sort ascending
    if(this.state[label]){
      sortFriends.sort((a, b) => (a[label] > b[label]) ? 1 : -1)
         // if the state of name, location, occupation is false, then sort descending
    }else{
      sortFriends.sort((a, b) => (a[label] > b[label]) ? -1 : 1)
    }
    //update state of sort to be the opposite of what it was
    this.setState({[label]: !this.state[label], friend:sortFriends})
  }

  // this is for sorting just the name column
  // handleSort = () => {
  //   console.log("clicked:")
  //   let sortFriends = this.state.friends
  //   if(this.state.sort){
  //     sortFriends.sort((a, b) => (a.name > b.name) ? 1 : -1)
  //   }else{
  //     sortFriends.sort((a, b) => (a.name > b.name) ? -1 : 1)
  //   }
  //   //update state of sort = !this.state.sort and friends
  //   this.setState({sort: !this.state.sort, friend:sortFriends})
  // }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    // always start with the original list when use the filter
    const filteredList = this.state.original.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ friends: filteredList });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBox
          handleSearchChange={this.handleSearchChange}
        />
        <h1 className="title">Friends List</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th onClick={()=>this.handleSort("name")}>Name</th>
              <th onClick={()=>this.handleSort("location")}>Location</th>
              <th onClick={()=>this.handleSort("occupation")}>Occupation</th>
              {/* Below is for sort on name only  */}
              {/* <th onClick={this.handleSort}>Name</th> */}
              {/*<th>Location</th> */}
              {/* <th>Occupation</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.friends.map(friend => (
              <Listing
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                location={friend.location}
                occupation={friend.occupation}
              />
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default App;