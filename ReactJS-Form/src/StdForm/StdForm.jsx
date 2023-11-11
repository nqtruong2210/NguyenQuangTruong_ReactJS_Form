import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exFormActions } from "../Store/ExForm/slice";

export const StdForm = () => {
  const [formValue, setFormValue] = useState({
    id: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const { stdEdit } = useSelector((state) => state.exForm);

  useEffect(() => {
    if (stdEdit) {
      setFormValue(stdEdit);
      console.log("prdEdit: ", stdEdit);
    }
  }, [stdEdit]);

  const dispatch = useDispatch();

  const { prdEdit } = useSelector((state) => state.exForm);
  console.log("prdEdit: ", prdEdit);
  // Currying Function
  const handleFormValue = (name) => (e) => {
    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="bg-dark text-white p-2 fw-bold fs-4 fst-italic">
        Student Information
      </p>
      <div className="col-6">
        <div>
          <p className="fw-bold">ID:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.id}
            onChange={handleFormValue("id")}
            disabled={formValue.id === stdEdit?.id}
          />
        </div>
        <div>
          <p className="fw-bold mt-3">PHONE NUMBER:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.phoneNumber}
            onChange={handleFormValue("phoneNumber")}
          />
        </div>
      </div>
      <div className="col-6">
        <div>
          <p className="fw-bold">FULL NAME:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.fullName}
            onChange={handleFormValue("fullName")}
          />
        </div>
        <div>
          <p className="fw-bold mt-3">EMAIL:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.email}
            onChange={handleFormValue("email")}
          />
        </div>
      </div>
      <div className="mt-3">
        {stdEdit ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              if (stdEdit) {
                dispatch(exFormActions.editStd(formValue));
                setFormValue({
                  id: "",
                  fullName: "",
                  phoneNumber: "",
                  email: "",
                });
              }
            }}
          >
            <i className="fa-solid fa-upload" />
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(exFormActions.createStd(formValue));
              setFormValue({
                id: "",
                fullName: "",
                phoneNumber: "",
                email: "",
              });
            }}
          >
            <i className="fa-solid fa-plus" />
          </button>
        )}
      </div>
    </form>
  );
};
