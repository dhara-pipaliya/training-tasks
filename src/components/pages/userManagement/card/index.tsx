import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../redux/userManagement/action";
import styles from "./Card.module.scss";

const Card = (props: any) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setSelectedUser(user);
    setEditUserData(true);
    handleOpen();
  };

  const handleDeleteUser = (id: any) => {
    const result = window.confirm("Are you sure to delete this user?");
    if (result) {
      dispatch(deleteUser(id));
    } else {
      console.log("User clicked Cancel");
    }
  };

  const { user, setSelectedUser, setEditUserData, handleOpen } = props;

  return (
    <div className={styles.cardHead}>
      <div className={styles.cardContain}>
        <div className={styles.avatarSection}>
          <Avatar aria-label="recipe" className={styles.avatar}>
            {" "}
            {user.name[0]}
          </Avatar>
          <div className={styles.cardData}>
            <div className={styles.cardName}>{user.name}</div>
            <div className={styles.cardEmail}>{user.email}</div>
            <div className={styles.optionSection}>
              <div className={styles.optionSection}>
                <div>
                  <Chip
                    label={user.role}
                    sx={{
                      backgroundColor:
                        user.role === "admin"
                          ? "#f44336"
                          : user.role === "user"
                          ? "#4caf50"
                          : user.role === "moderator"
                          ? "#2196f3"
                          : undefined,
                      color: "white",
                      height: 22,
                      padding: "6px",
                      "& .MuiChip-label": {
                        padding: "6px",
                        fontSize: "10px",
                        fontWeight: "600",
                      },
                    }}
                  />
                </div>
              </div>
              <div>
                <Chip
                  label={user.status}
                  sx={{
                    backgroundColor:
                      user.status === "active" ? "#90ee90" : "#d3d3d3",
                    color: "#000",
                    height: 20,
                    padding: "6px",
                    "& .MuiChip-label": {
                      padding: "4px",
                      fontSize: "10px",
                      fontWeight: "600",
                    },
                  }}
                />
              </div>
            </div>
            <div className={styles.joinedDate}>
              {" "}
              Joined: {new Date(user.id).toISOString().split("T")[0]}
            </div>
          </div>
        </div>
        <div className={styles.actionSection}>
          <BorderColorOutlinedIcon
            className={styles.actionIcon}
            onClick={handleEdit}
          />
          <DeleteOutlineOutlinedIcon
            className={styles.actionIcon}
            onClick={() => handleDeleteUser(user.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
