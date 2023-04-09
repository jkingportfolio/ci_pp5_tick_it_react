import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import Asset from "../components/Asset";
import { useProfileData } from "../contexts/ProfileDataContext";
import Profile from "../pages/profiles/Profile";

const ProfilesList = ({ mobile }) => {
  const { listProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {listProfiles.results.length ? (
        <>
          <p className={appStyles.SideTitle}>User List</p>
          <div
            className="d-flex flex-wrap justify-content-around"
            style={{ height: "100px", overflowY: "scroll" }}
          >
            {listProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} mobile={mobile} />
            ))}
          </div>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default ProfilesList;
