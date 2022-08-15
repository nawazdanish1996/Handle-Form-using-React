import React, { useState } from "react";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [slct, setSlct] = useState(true);
  const [chk, setChk] = useState("");

  function getData(e) {
    console.log(name, slct, chk);
    e.preventDefault();
  }

  return (
    <>
      <h1>Handle Form using React.js</h1>
      <br />
      <br />
      <br />

      <form onSubmit={getData}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <br />
        <br />
        <label htmlFor="">State: </label>
        <select onChange={(e) => setSlct(e.target.value)} required>
          <option style={{ color: "gray" }}>Select</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Orissa</option>
          <option>Nagaland</option>
          <option>West Bengal</option>
        </select>
        <br />
        <br />
        <input onChange={(e) => setChk(e.target.checked)} type="checkbox" name="" id="check" required />
        <label htmlFor="check" style={{ userSelect: "none" }}>
          Accept All terms and conditions
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        {"\u00a0\u00a0\u00a0"}
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default HandleForm;
