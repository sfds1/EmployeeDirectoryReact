import React from "react";


function Listing(props) {
    return(
    <tr>
      <td><img src={props.image} width ="50" height="50"></img></td>
      <td>{props.name}</td>
      <td>{props.location}</td>
      <td>{props.occupation}</td>
    </tr>

    )};

    export default Listing;