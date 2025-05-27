import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./FormHandling.module.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface FormValues {
  name: string;
  age: number | string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Please enter your name")
    .matches(/^[A-Za-z]/, "Name can only alphabets"),
  age: Yup.number()
    .required("Please enter your age")
    .typeError("Age must be a number")
    .integer("Age can only digits")
    .min(18, "You must be at least 18 years old"),
  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase"
    ),
});

const FormHandling = (props: any) => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const { taskDetail } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values: FormValues) => {
    setSubmittedData(values);
    formik.resetForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.taskDetails}>
        <div className={styles.taskHeading}>
          {taskDetail?.id}.{taskDetail?.title}
        </div>
        <div className={styles.taskDescription}>{taskDetail?.description}</div>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.fieldNameAge}>
          <div className={styles.field}>
            <label className={styles.label}>{`Name`}</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
              className={`${styles.inputField}
                ${
                  formik.touched.name && formik.errors.name
                    ? styles.invalidInput
                    : ""
                } `}
            ></input>
            {formik.touched.name && formik.errors.name && (
              <div className={styles.error}>{formik.errors.name}</div>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{`Age`}</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your age"
              className={`${styles.inputField} ${
                formik.touched.age && formik.errors.age
                  ? styles.invalidInput
                  : ""
              } `}
            ></input>
            {formik.touched.age && formik.errors.age && (
              <div className={styles.error}>{formik.errors.age}</div>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{`Email`}</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className={`${styles.inputField} ${
              formik.touched.email && formik.errors.email
                ? styles.invalidInput
                : ""
            } `}
          ></input>
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{`Password`}</label>
          <div
            className={`${styles.passwordField} ${
              formik.touched.password && formik.errors.password
                ? styles.invalidInput
                : ""
            } `}
          >
            <input
              type={passwordType ? "password" : "text"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Password"
              className={styles.passwordInput}
            ></input>
            <div
              className={styles.passwordIcon}
              onClick={() => setPasswordType(!passwordType)}
            >
              {passwordType ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className={styles.submit}>
          {`Submit`}
        </button>
      </form>
      {submittedData && (
        <div className={styles.result}>
          <div className={styles.resultHeading}>{`Submitted Data `}</div>
          <div className={styles.resultFieldName}>
            <strong>{`Name`}:</strong> {submittedData.name}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Age`}:</strong> {submittedData.age}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Email`}:</strong> {submittedData.email}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Password`}:</strong> {submittedData.password}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
