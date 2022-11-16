import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
import Header from "../components/header";
import Edit from "./edit";
import { AiOutlineSetting } from "react-icons/ai";

const Dashboard = () => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenChek, setAbsenChek] = useState(false);

  const [modalshow, setModalShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("user belum login!!!");
      window.location.replace("/login");
    }

    axios({
      method: "GET",
      url: "http://localhost:3000/absensi",
    }).then((results) => {
      setAbsensiList(results.data.absensi);
    });
  }, [absenChek]);

  const myAbsen = (params) => {
    const requestData = {
      nip: localStorage.getItem("nip"),
    };

    console.log(params);
    axios({
      method: "POST",
      url: `http://localhost:3000/absensi/${params}`,
      data: requestData,
    }).then((results) => {
      setAbsenChek(!absenChek);
      //   console.log(results.data);
      //   if (results.data) alert(`${params} sukses!`);
    });
    // if (params === "in") {
    // } else if (params === "out") {
    // } else {
    // }
  };

  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <Header />

        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="me-2">Halo {localStorage.getItem("nama")}</h2>
            <AiOutlineSetting size={20} onClick={() => setModalShow(true)} />
            <Edit show={modalshow} onHide={() => setModalShow(false)} />
          </div>
          <div className="">
            <Badge
              pill
              bg="success"
              className="me-2 p-cursor "
              type="button"
              onClick={() => myAbsen("checkin")}
            >
              Checkin
            </Badge>
            <Badge
              pill
              bg="danger"
              type="button"
              onClick={() => myAbsen("checkout")}
            >
              Checkout
            </Badge>
          </div>
        </div>
        <div>
          <Edit />
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absen, i) => {
                const { users_nip, status, createdAt } = absen;
                const newDate = moment(createdAt).format("h:mm a, DD-MM-YYYY");
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{users_nip}</td>
                    <td>{status}</td>
                    <td>{newDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
