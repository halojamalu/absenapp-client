import React from "react";
import { Button } from "react-bootstrap";
import Logout from "./logout";

function Header() {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Dashboard</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Share
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Export
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary dropdown-toggle me-2"
        >
          <span data-feather="calendar" className="align-text-bottom"></span>
          This week
        </button>
        <Button
          onClick={() => Logout()}
          type="button"
          className="btn btn-sm btn-danger "
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Header;
