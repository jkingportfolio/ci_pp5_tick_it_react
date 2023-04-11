import React, { useState} from "react";
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import Asset from "../components/Asset";
import { useProfileData } from "../contexts/ProfileDataContext";
import Profile from "../pages/profiles/Profile";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";

const ProfilesList = ({ mobile }) => {
  const { listProfiles } = useProfileData();
  const [profiles, setProfiles] = useState({ results: [] });

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      } ${appStyles.Hide}`}
    >
      {listProfiles.results.length ? (
        <>
          <p className={appStyles.SideTitle}>Profiles</p>
          <div
            className="d-flex flex-wrap justify-content-around"
            style={{ height: "800px", overflowY: "scroll" }}
          >
            <InfiniteScroll
              children={listProfiles.results.map((profile, index) => (
              <div
                className={mobile ? "w-100 p-2" : "w-50 p-2"}
                key={index}
              >
                <Profile key={profile.id} profile={profile} mobile={mobile} />
              </div>
            ))}
            dataLength={listProfiles.results.length}
                loader={<Asset spinner />}
                hasMore={!!listProfiles.next}
                next={() => fetchMoreData(profiles, setProfiles)}
              />
          </div>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};


export default ProfilesList;