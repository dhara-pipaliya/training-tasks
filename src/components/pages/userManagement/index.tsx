import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  localStorageSetData,
  searchUser,
  setFilter,
} from "../../../redux/userManagement/action";
import styles from "../userManagement/UserManagement.module.scss";
import Card from "./card";
import DropDownSelect from "./dropDownSelect";
import UserModal from "./model";

const UserManagement = (props: any) => {
  const { taskDetail } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const filter = useSelector((state: any) => state.filter);
  const searchValue = useSelector((state: any) => state.searchUser);
  const [editUserData, setEditUserData] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const allUser = [
    { label: "All Roles", value: "allRoles" },
    { label: "Admin", value: "admin" },
    { label: "Moderator", value: "moderator" },
    { label: "User", value: "user" },
  ];

  const filteredUsers = (user || []).filter((u: any) => {
    const nameMatch = u?.name
      ?.toLowerCase()
      .includes(searchValue?.toLowerCase() || "");
    const filterMatch = filter === "allRoles" || u.role === filter;
    return nameMatch && filterMatch;
  });

  useEffect(() => {
    dispatch(localStorageSetData({ key: "userCard", data: user }));
  }, [user, dispatch]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.managementSection}>
          <div className={styles.taskHeading}>
            {taskDetail?.id}.{taskDetail?.title}
          </div>
          <div className={styles.taskDescription}>
            {taskDetail?.description}
          </div>
          <div className={styles.inputSection}>
            <TextField
              className={styles.searchField}
              value={searchValue}
              onChange={(e) => dispatch(searchUser(e.target.value))}
              placeholder="Search users..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div className={styles.allUserSelect}>
              <DropDownSelect
                value={filter}
                onChange={(e: any) => dispatch(setFilter(e.target.value))}
                options={allUser}
                className={styles.selected}
              />
            </div>
            <Button
              onClick={handleOpen}
              className={styles.addButton}
              startIcon={<AddOutlinedIcon className={styles.addIcon} />}
            >
              {` Add User`}
            </Button>
          </div>
          <div className={styles.cardSection}>
            {filteredUsers.length <= 0 ? (
              <div className={styles.noData}>No users found</div>
            ) : (
              filteredUsers.map((user: any) => {
                return (
                  <Card
                    user={user}
                    key={user.id}
                    setSelectedUser={setSelectedUser}
                    setEditUserData={setEditUserData}
                    handleOpen={handleOpen}
                  />
                );
              })
            )}
          </div>
          <div className={styles.totalSection}>
            {filteredUsers.length > 0 &&
              `Showing ${filteredUsers.length} of ${(user || []).length} users`}
          </div>
        </div>
      </div>
      <UserModal
        open={open}
        handleClose={handleClose}
        editUserData={editUserData}
        setEditUserData={setEditUserData}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </>
  );
};

export default UserManagement;
