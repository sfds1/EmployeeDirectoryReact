import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from "./components/table"
import Table from 'react-bootstrap/Table'


class App extends Component {
  // sets the state to the friends.json array
  state = {
    friends
  };
  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // changes the state to the new array without the friend that got deleted
    this.setState({  friends  });
    // console.log(this.state.oldFriends)
  }


  // form  --  hnadle onchange input then update the state with the value
  // sort 
  render() {
    console.log(this.props);
    return (
    //   <Wrapper>
    <div>

        <h1 className="title">Friends List</h1>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Location</th>
      <th>Occupation</th>
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
            
          );
        })}

      </div>
    );
  }
}

export default App;