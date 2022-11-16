import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Register = ({ title, subtitle }) => {
  // nampung data nip, nama & password
  const [NIP, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  // ngurusin nip
  const handleNIP = (inputNIP) => {
    // console.log(inputNIP);
    setNIP(inputNIP);
  };

  // ngurusin nama
  const handleNama = (inputNama) => {
    // console.log(inputNIP);
    setNama(inputNama);
  };

  // ngurusin password
  const handlePassword = (inputPassword) => {
    // console.log(inputPassword);
    setPassword(inputPassword);
  };

  // ngurisin register
  const userRegister = () => {
    console.log("user register!");

    //ngambil data dari API
    const requestingDataAPI = {
      nip: NIP,
      nama: nama,
      password: password,
    };

    // ngirim data inputan ke backend/API
    axios({
      method: "POST",
      url: "http://localhost:3000/users",
      data: requestingDataAPI,
    }).then((results) => {
      console.log(results.data);

      if (results.data.registered) {
        alert("Pendaftaran berhasil!");
        window.location.replace("/login");
      } else {
        //tidak muncul, setting dari backend biar bisa nampil
        alert("Gagal Daftar!");
      }
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
          <Form.Label className="fw-bold">Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama anda"
            required
            onChange={(event) => handleNama(event.target.value)}
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
        <Button
          className="mt-3 w-100 fw-bold py-2"
          onClick={() => userRegister()}
        >
          Daftar Sekarang
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
