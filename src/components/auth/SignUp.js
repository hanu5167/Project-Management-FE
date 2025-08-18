import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../services/Auth";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
  role: Yup.string().required("Roleis required"),
});

export default function SignUp() {
  const { isUserRegistered } = useSelector((state) => state.auth);

  const history = useNavigate();
  const dispatch = useDispatch();
  console.log("registered: ", isUserRegistered);

  useEffect(() => {
    if (isUserRegistered === true) {
      history("/login");
    }
  }, [isUserRegistered]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(register(values));
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                margin="normal"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <FormControl
                fullWidth
                margin="normal"
                error={touched.role && Boolean(errors.role)}
              >
                <Select
                  labelId="role-label"
                  name="role"
                  value={values?.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Member">Member</MenuItem>
                </Select>
                {touched.role && errors.role && (
                  <FormHelperText>{errors.role}</FormHelperText>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Sign Up
              </Button>
              <p className="text-center">
                Already have an account ! click{" "}
                <span>
                  <Link to="/login">here</Link>
                </span>
                &nbsp;to login
              </p>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
