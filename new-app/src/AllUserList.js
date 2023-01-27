import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  let allUser = [
    { name: "John", email: "jon@gmail.com", phoneNumber: "+91 9854675123" },
    { name: "shreya", email: "shreya@gmail.com", phoneNumber: "+91 7845695487" },
    { name: "prince", email: "prince@gmail.com", phoneNumber: "+91 9548774586" },
  ];


return(
    <div>
        <UserDetails user={allUser[0]} />
        <UserDetails user={allUser[1]} />
        <UserDetails user={allUser[2]} />
    </div>
)
};

export default AllUserList;
