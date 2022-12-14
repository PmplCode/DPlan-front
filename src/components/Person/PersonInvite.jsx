import { useParams, Link } from "react-router-dom";
import planService from "../../services/plan.service.js";
import "./PersonInvite.css";

function PersonInvite({ friend, updatePeople }) {
  const { planId } = useParams();
  const { _id, username, name, profileImage } = friend;

  const inviteHandle = () => {
    planService.inviteGuestsFriends(planId, _id).then((resp) => {
      updatePeople(Math.random() * 1000, username);
    });
  };

  return (
    <div className="inviteCard">
      <div>
        <Link to={"/" + username + "/profile"}>
          <img
            className="imgUserInvite profilePicInvite "
            src={profileImage}
            alt={name}
          />
        </Link>
      </div>
      <div className="userInfoInvite">
        <h5 className="usernameInvite">{username}</h5>
        <button href="#" className="btn btn-primary" onClick={inviteHandle}>
          Invite
        </button>
      </div>
    </div>
  );
}

export default PersonInvite;
