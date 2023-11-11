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

  const [formError, setFormError] = useState({
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

  const validation = (name, value) => {
    switch (name) {
      case "id":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }
      case "phoneNumber":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }
      case "fullName":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }
      case "email":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }
      default:
        return "";
    }
  };
  // Currying Function
  const handleFormValue = (name) => (e) => {
    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
    // console.log(e.target.value);
    setFormError({
      ...formError,
      [name]: validation(name, event.target.value),
    });
  };

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        const validationError = {};

        Object.keys(formValue).forEach((name) => {
          const error = validation(name, formValue[name]);
          console.log("formValue[name]: ", formValue[name]);

          if (error && error.length > 0) {
            validationError[name] = error;
          }
        });
        if (Object.keys(validationError).length > 0) {
          setFormError({ ...validationError });
          return;
        }
        if (stdEdit) {
          dispatch(exFormActions.editStd(formValue));
        } else {
          dispatch(exFormActions.createStd(formValue));
        }

        setFormValue({
          id: "",
          fullName: "",
          phoneNumber: "",
          email: "",
        });
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
          {formError.id && (
            <p>
              <small className="text-danger">{formError.id}</small>
            </p>
          )}
        </div>
        <div>
          <p className="fw-bold mt-3">PHONE NUMBER:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.phoneNumber}
            onChange={handleFormValue("phoneNumber")}
          />
          {formError.phoneNumber && (
            <p>
              <small className="text-danger">{formError.phoneNumber}</small>
            </p>
          )}
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
          {formError.fullName && (
            <p>
              <small className="text-danger">{formError.fullName}</small>
            </p>
          )}
        </div>
        <div>
          <p className="fw-bold mt-3">EMAIL:</p>
          <input
            type="text"
            className="form-control border-secondary"
            value={formValue.email}
            onChange={handleFormValue("email")}
          />
          {formError.email && (
            <p>
              <small className="text-danger">{formError.email}</small>
            </p>
          )}
        </div>
      </div>
      <div className="mt-3">
        {stdEdit ? (
          <button
            className="btn btn-primary"
            // onClick={() => {
            //   if (stdEdit) {
            //     dispatch(exFormActions.editStd(formValue));
            //     setFormValue({
            //       id: "",
            //       fullName: "",
            //       phoneNumber: "",
            //       email: "",
            //     });
            //   }
            // }}
          >
            <i className="fa-solid fa-upload" />
          </button>
        ) : (
          <button
            className="btn btn-success"
            // onClick={() => {
            //   dispatch(exFormActions.createStd(formValue));
            //   setFormValue({
            //     id: "",
            //     fullName: "",
            //     phoneNumber: "",
            //     email: "",
            //   });
            // }}
          >
            <i className="fa-solid fa-plus" />
          </button>
        )}
      </div>
    </form>
  );
};
