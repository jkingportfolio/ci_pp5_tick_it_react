import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router";
import styles from "../styles/DropDown.module.css";
import appStyles from "../App.module.css";


const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/*
  Dropdown menu which will show if user is owner of task or pack 
  allowing the user to edit / delete dependant on the object in 
  question by calling the handleEdit or handleDelete
  functions
*/
export const DropDown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" /><span className={appStyles.DarkText}>Edit</span>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" /><span className={appStyles.DarkText}>Delete</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/*
  Dropdown menu which will show if user is owner of viewed profile 
  allowing the user to edit profile inputs or the change the password 
  calling the handleEdit function
*/
export const EditProfileDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit"/> <span className={appStyles.DarkText}>Edit profile</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

