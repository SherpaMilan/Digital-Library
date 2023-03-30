import React, { useState } from "react";
import { Button, Container, Form, Placeholder } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/custom-input/CustomInput";

import { DefaultLayout } from "../../components/layout/DefaultLayout";

import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase-config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { confirmPassword, password, email, name } = form;

      if (confirmPassword !== password) {
        return toast.error("Password do not match");
      }

      // create user in firebase auth

      const userPending = createUserWithEmailAndPassword(auth, email, password);

      toast.promise(userPending, {
        pending: "please wait",
      });

      const { user } = await userPending;

      if (user?.uid) {
        updateProfile(user, {
          displayName: name,
          role: form.role,
        });
      }

      // store in our firestore as well
      const obj = {
        email,
        name,
        role: form.role,
      };

      await setDoc(doc(db, "users", user.uid), obj);

      console.log(user);
      dispatch(setUser({ ...obj, uid: user.uid, role: form.role }));

      toast.success("Sign up successfully, redirecting to dashboard");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
    {
      label: "Name",
      name: "name",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "********",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "********",
      type: "password",
      required: true,
    },
  ];

  return (
    <DefaultLayout>
      <Container className="mt-5 ">
        <Form
          onSubmit={handleOnSubmit}
          className="border rounded shadow-lg p-5 m-auto py-5"
          style={{ width: "450px" }}
        >
          <h3 className="text-primary fw-bolder">Join our library</h3>

          <Form.Text className="mt-5 py-2">
            Anyone can create admin or user account for experiment purpose.
            <br />
            <br />
            Once you are regustered, you will be redirected to Dashboard
            automatically.
          </Form.Text>

          <div className="mt-5">
            <Form.Group className="mb-3">
              <label htmlFor="" className="mb-2">
                Account Type:
              </label>
              <Form.Select name="role" onChange={handleOnChange}>
                <option value="">-- select user type --</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>

            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
          </div>

          <div className="d-grid mt-3">
            <Button type="submit">Join Libary</Button>
          </div>
        </Form>
      </Container>
    </DefaultLayout>
  );
};

export default SignUp;
