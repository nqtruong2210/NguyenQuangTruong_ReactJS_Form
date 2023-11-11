import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { exFormActions } from "../Store/ExForm/slice";

export const StdTable = () => {
  const { stdList } = useSelector((state) => state.exForm);
  console.log("stdList: ", stdList);

  const dispatch = useDispatch();
  return (
    <div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stdList.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.fullName}</td>
                <td>{std.phoneNumber}</td>
                <td>{std.email}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      dispatch(exFormActions.setEditStd(std));
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(exFormActions.deleteStd(std.id));
                    }}
                  >
                    <i className="fa-solid fa-trash-can" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
