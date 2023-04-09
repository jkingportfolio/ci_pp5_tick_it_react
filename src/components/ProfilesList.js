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
          <p className={appStyles.SideTitle}>Profiles with least tasks</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {listProfiles.results.map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            listProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default ProfilesList;