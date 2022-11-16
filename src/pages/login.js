import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Login = ({ title, subtitle }) => {
  // nampung data nip & password
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");

  // ngurusin nip
  const handleNIP = (inputNIP) => {
    // console.log(inputNIP);
    setNIP(inputNIP);
  };

  // ngurusin password
  const handlePassword = (inputPassword) => {
    // console.log(inputPassword);
    setPassword(inputPassword);
  };

  // ngurisin login
  const userLogin = () => {
    //nip: 1122334455, pass: 123456
    console.log("user siap masuk!");

    //ngambil data dari API
    const requestingDataAPI = {
      nip: NIP,
      password: password,
    };

    // ngirim data inputan ke backend/API
    axios({
      method: "POST",
      url: "http://localhost:3000/users/login",
      data: requestingDataAPI,
    }).then((results) => {
      localStorage.setItem("nip", results.data.users.nip);
      localStorage.setItem("nama", results.data.users.nama);
      window.location.replace("/dashboard");
    });
  };

  return (
    <Container>
      <div className="d-flex justify-content-center fw-600 h1 my-5">
        <ReactTypingEffect
          text={[title, subtitle]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukkan NIP anda"
            required
            onChange={(event) => handleNIP(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*****"
            required
            onChange={(event) => handlePassword(event.target.value)}
          />
        </Form.Group>
        <Button className="mt-3 w-100 fw-bold py-2" onClick={() => userLogin()}>
          Masuk Sekarang
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
