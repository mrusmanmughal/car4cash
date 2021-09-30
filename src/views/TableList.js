import axios from "axios";
import React, { useEffect, useState } from "react";

function TableList() {
  const [TableData, setState] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const loadData = await axios.get("http://localhost:3007/car");
    setState(loadData.data);
    console.log(TableData);
  };
  return (
    <>
      <div class="container mb-3">
        <div class="row">
          <div class="col">
            <div class="p-3 border bg-light h6">
              <span>Total Users :</span>
              <span> {TableData.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table  */}
      <table className="table table-hover my-3 container w-100 border border-2 shadow-lg">
        <thead>
          <tr>
            <td scope="col">#</td>
            <td scope="col">Reg No</td>
            <td scope="col">Model </td>
            <td scope="col">Engine Capacity</td>
            <td scope="col">Actions </td>
          </tr>
        </thead>
        <tbody>
          {TableData.map((val, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{val.registrationNumber}</td>
              <td>{val.engineCapacity}</td>
              <td>{val.revenueWeight}</td>
              <td>
                <button className="btn   ">
                  <i
                    className="bi bi-trash text-danger"
                    onClick={() => Dell(val.id)}
                  ></i>
                </button>
                <button className="btn   ">
                  <i className="bi bi-eye-fill px-2"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
