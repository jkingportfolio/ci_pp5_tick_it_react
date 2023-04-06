import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Pack from "./Pack";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
// import appStyles from "../../App.module.css";
// import PackListings from "./PackListings";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PackDetail() {
  const { id } = useParams();
  const [pack, setPack] = useState({ results: [] });

  // const currentUser = useCurrentUser();
  // const profile_image = currentUser?.profile_image;
  // const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: pack } ] = await Promise.all([
          axiosReq.get(`/packs/${id}`),
          // axiosReq.get(`/comments/?pack=${id}`),
        ]);
        setPack({ results: [pack] });
        // setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">      
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Pack {...pack.results[0]} setPack={setPack} packDetail />      
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </Row>
  );
}

export default PackDetail;
