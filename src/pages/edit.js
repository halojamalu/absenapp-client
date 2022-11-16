import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Logout from "../components/logout";

const Edit = (modalprams) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");

  const updateProfile = () => {
    const requestData = {
      nip: localStorage.getItem("nip"),
      nama: nama,
      passwordBaru: passwordBaru,
      password: password,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3000/users",
      data: requestData,
    }).then((results) => {
      alert("Anda akan keluar, silakan login lagi!");
      Logout();
    });
  };
  return (
    <Modal
      {...modalprams}
      centered
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
    >
      <Modal.Header closeButton>
        <h3 id="contained-modal-title-vcenter">Edit Profile</h3>
      </Modal.Header>
      <Modal.Body>
        <Form className="my-3">
          <Form.Group className="mb-3">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              onChange={(event) => setNama(event.target.value)}
              defaultValue={localStorage.getItem("nama")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password Baru</Form.Label>
            <Form.Control
              type="password"
              onChange={(event) => setPasswordBaru(event.target.value)}
            />
          </Form.Group>
          <hr />
          <Form.Group className="mb-3">
            <Form.Label>Password Lama</Form.Label>
            <Form.Control
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              Silakan masukkan password lama anda, kemudian silakan login ulang!
            </Form.Text>
          </Form.Group>
          {/* <Button onClick={modalprams.onHide}>Close</Button> */}
          <Button className="w-100 mb-5" onClick={() => updateProfile()}>
            Update Profil
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Edit;
