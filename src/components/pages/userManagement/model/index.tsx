import CloseIcon from "@mui/icons-material/Close";
import { Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addData, updateUser } from "../../../../redux/userManagement/action";
import DropDownSelect from "../dropDownSelect/index";
import styles from "../model/Model.module.scss";
import InputField from "../inputField";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Moderator", value: "moderator" },
  { label: "User", value: "user" },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Please enter your name")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets"),
  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email address"),
  role: Yup.string().required("Please select a role"),
  status: Yup.string().required("Please select a status"),
});

const UserModal = ({
  open,
  handleClose,
  editUserData,
  setEditUserData,
  selectedUser,
  setSelectedUser,
}: any) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .required("Please enter your name")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Invalid email address"),
    role: Yup.string().required("Please select a role"),
    status: Yup.string().required("Please select a status"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: selectedUser?.name || "",
      email: selectedUser?.email || "",
      role: selectedUser?.role || "",
      status: selectedUser?.status || "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (editUserData) {
        dispatch(updateUser({ ...values, id: selectedUser?.id }));
      } else {
        dispatch(addData(values));
      }
      resetForm();
      setEditUserData(false);
      setSelectedUser(null);
      handleClose();
    },
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.model}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.userForm}>
            <div className={styles.addUser}>
              <div className={styles.addContain}>
                {editUserData ? "Edit User" : "Add New User"}
              </div>
              <CloseIcon className={styles.closeIcon} onClick={handleClose} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <InputField
                name="name"
                type="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter name"
                className={styles.inputField}
              />
              {formik.touched.name && formik.errors.name && (
                <div className={styles.error}>
                  {formik.errors.name as string}
                </div>
              )}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <InputField
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"
                className={styles.inputField}
              />
              {formik.touched.email && formik.errors.email && (
                <div className={styles.error}>
                  {formik.errors.email as string}
                </div>
              )}
            </div>
            <div className={styles.field}>
              <DropDownSelect
                name="role"
                value={formik.values.role}
                options={roleOptions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Role"
                className={styles.selectField}
              />
              {formik.touched.role && formik.errors.role && (
                <div className={styles.error}>
                  {formik.errors.role as string}
                </div>
              )}
            </div>
            <div className={styles.field}>
              <DropDownSelect
                name="status"
                value={formik.values.status}
                options={statusOptions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Status"
                className={styles.selectField}
              />
              {formik.touched.status && formik.errors.status && (
                <div className={styles.error}>
                  {formik.errors.status as string}
                </div>
              )}
            </div>
            <button type="submit" className={styles.submit}>
              {editUserData ? "Update User" : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UserModal;
