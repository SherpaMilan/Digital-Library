import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { auth, db } from "../../firebase-config/firebaseConfig";
import { autoLogin } from "./userAction";
import { setUser } from "./userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/dashboard");
  }, [user?.uid, navigate]);

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
      const { password, email } = form;

      // create user in firebase auth

      const userPending = signInWithEmailAndPassword(auth, email, password);

      toast.promise(userPending, {
        pending: "please wait",
      });

      const { user } = await userPending;

      const { uid } = user;

      dispatch(autoLogin(uid));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
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
  ];

  return (
    <DefaultLayout>
      <Container className="mt-5 ">
        <Form
          onSubmit={handleOnSubmit}
          className="border rounded shadow-lg p-5 m-auto py-5"
          style={{ width: "450px" }}
        >
          <h3 className="text-primary fw-bolder">Welcome to the library</h3>

          <div className="mt-5">
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
          </div>

          <div className="d-grid mt-3">
            <Button type="submit"> Libary Login</Button>
          </div>
        </Form>
      </Container>
    </DefaultLayout>
  );
};

export default SignIn;
