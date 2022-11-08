import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import userService from "../../services/user.service.js"
import { Link } from "react-router-dom";

function PersonAddFriends({person, updatePeople}) {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const {_id, username, name, profileImage} = person

    const friendRequestHandle = ()=>{
        userService.sendFriendRequest(user.username, _id)
        .then (resp => {
          updatePeople (Math.random()*1000)
        })
    }

  return (
    <div className="card" style= {{"width": "18rem"}}>
        <img src={profileImage} alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <p className="card-text">{name}</p>
            <Link to={"/"+username+"/profile"} className="btn btn-primary">View Profile</Link>
            <button href="#" className="btn btn-primary" onClick={friendRequestHandle}>Send Friend Request</button>
        </div>
    </div>

    
  );
}

export default PersonAddFriends;