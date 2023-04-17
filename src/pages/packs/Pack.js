import React from "react";
import styles from "../../styles/Pack.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";
import appStyles from "../../App.module.css";

const Pack = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    updated_on,
    pack_description,
    members,
    tasks,
    packDetail,
    // setPacks,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/packs/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/packs/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link to={`/packs/${id}`}>
    <Card className={styles.Pack}>
      <Card.Body className={appStyles.DarkText}>
        {title}
        <Container className={`${appStyles.DarkText} "align-items-center justify-content-between"`}>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className={`${appStyles.DarkText}  "d-flex align-items-center"`}>
            <span>{updated_on}</span>
            {is_owner && packDetail && <DropDown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />}
          </div>
        </Container>
      </Card.Body>
      <Card.Body className={appStyles.DarkText}>
        {pack_description && <Card.Text>{pack_description}</Card.Text>}
      </Card.Body>
      <Card.Body>
        <div className={appStyles.DarkText}>
        Created on: {created_on}
        </div>
        <div className={appStyles.DarkText}>
          Tasks: {tasks}
        </div>       
        
      </Card.Body>
    </Card>
    </Link>
  );
};

export default Pack;



// return (
//   <Card className={styles.Pack}>
//     <Card.Body className={styles.cardbody}>
//       <div className={styles.PositionedButton}>
//         {is_owner && packDetail && (
//           <DropDown handleEdit={handleEdit} handleDelete={handleDelete} />
//         )}
//       </div>
//       <Link to={`/packs/${id}`}>
//         <Container className={styles.title}>Pack: {title}</Container>
//       </Link>
//       <Container className="align-items-center justify-content-between">
//         <div>
//           <div
//             className={`${styles.Posted} ${styles.TopMargin} ${styles.TopBottom}`}
//           >
//             Posted by:{" "}
//             <Link to={`/profiles/${profile_id}`}>
//               {" "}
//               <span className={styles.Posted}>{owner}</span>{" "}
//               <Avatar src={profile_image} height={55} />
//             </Link>
//           </div>
//         </div>
//         <div className={styles.Posted}>
//           <div className={styles.Posted}>Posted on: {created_on}</div>
//         </div>
//         <div className={`{${styles.Posted} ${styles.TopMargin}`}>
//           <div className={styles.Posted}>Due on: {due_date}</div>
//         </div>
//         <div className={`{${styles.Posted} ${styles.TopMargin}`}>
//           <div className={styles.Posted}>Priority: {priority}</div>
//         </div>
//         <hr></hr>
//         <div>
//           <div>
//             <div className={styles.Posted}>Detail of task</div>
//             <div className={`${styles.TaskBody} ${styles.TopMargin}`}>
//               {task_body}
//             </div>
//           </div>
//           <hr></hr>
//         </div>
//       </Container>
//     </Card.Body>

//   </Card>
// );
