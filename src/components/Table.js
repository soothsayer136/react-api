import React from "react";

// import CartItem from "./CartItem";
import { connect } from "react-redux";
// import { CLEAR_CART, GET_TOTALS, GET_TOTALs } from "../action";
const Table = ({ empData = [] }) => {
  //   React.useEffect(() => {
  //     dispatch({ type: GET_TOTALS });
  //   }, [cart]);
  if (empData.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Table</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <div>
      <table className="table border shadow" style={{ width: 500 }}>
        <thead className="thead-primary">
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        {empData.map((emp) => {
          const { id, employee_name, employee_salary, employee_age } = emp;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{employee_name}</td>
              <td>{employee_salary}</td>
              <td>{employee_age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.empData);
  return { empData: state.empData };
};

export default connect(mapStateToProps)(Table);
