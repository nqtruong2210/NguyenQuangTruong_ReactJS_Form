import React from "react";
import { StdForm } from "./StdForm";
import { StdTable } from "./StdTable";

export const ExForm = () => {
  const divBackGround = {
    backgroundImage: `url("image/bgStd.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="img-fluid" style={divBackGround}>
      <div className="container">
        <h2 className="fw-bold text-danger text-center">Student Management</h2>
        <StdForm />
        <StdTable />
      </div>
    </div>
  );
};
