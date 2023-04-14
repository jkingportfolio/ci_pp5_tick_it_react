import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import appStyles from "../../App.module.css";

const Profile = (props) => {
  const { id, image, owner, profile, mobile, imageSize = 55 } = props;
  // const { id, image, owner } = profile;

  const currentUser = useCurrentUser();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2`}>
      <Link className={`${appStyles.DarkText} "align-self-center"`} to={`/profiles/${id}`}>
        <strong>{owner}</strong>
        </Link>
      </div>
    </div>
  );
};

export default Profile;