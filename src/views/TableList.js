import React from "react";

// react-bootstrap components

function TableList() {
  return (
    <>
      <div class="container mb-5">
        <div class="row">
          <div class="col">
            <div class="p-5 border bg-light">
              <p>Total Users</p>
              <h3>30</h3>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-hover my-3 container w-75 border border-4 shadow-lg">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Fname</th>
            <th scope="col">Email</th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((val, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{val.name}</td>
              <td>{val.fname}</td>
              <td>{val.email}</td>
              <td>
                <i
                  className="bi bi-trash text-danger"
                  onClick={() => Dell(val.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
