import React, { useState } from "react";
import { ADD_EMPLOYEE } from "../action";
import { connect } from "react-redux";

function Form({ handleSubmit }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const data = {
    name,
    address,
    age,
  };

  return (
    <div>
      <form className="shadow" style={{ width: 500 }}>
        <label>Name</label>
        <input
          autoFocus
          type="text"
          placeholder="Bikrum Katuwal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Salary</label>
        <input
          type="number"
          placeholder="24000"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="24"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e.preventDefault())}>
          Submit
        </button>
      </form>
    </div>
  );
}

// const mapStateToProps = (store) => {
//   return {
//     Employee: store.empData.map((emp) => {
//       const { id } = emp;

//       return id;
//     }),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e) => {
      dispatch({ type: ADD_EMPLOYEE });
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
