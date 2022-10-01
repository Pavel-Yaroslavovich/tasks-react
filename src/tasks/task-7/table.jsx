import React from "react";
import { useState, useEffect } from "react";
import { getData } from "./utils";
import Spinner from "./spinner";

const Table = () => {
  const [value, setValue] = useState()

  useEffect(() => {
    getData().then((obj) => {
      let dan = JSON.parse(obj);
      setValue(dan);
    });
  }, []);
  
  let elem;

  if (value === undefined) {
   elem = <Spinner />
  } 
  else if(value) {
    elem = value.map((item,index) => {
      return <tr key={index}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
        <td>{item.workPlace}</td>
      </tr>
    })
  }

  return (
    <div>
      <table className="tableOne" style={{ border: '1px solid black' }}>
        <tbody>
          <tr>
            <th style={{ paddingRight: '20px' }}>name</th>
            <th style={{ paddingRight: '25px' }}>lastName</th>
            <th style={{ paddingRight: '30px' }}>age</th>
            <th style={{ paddingRight: '20px' }}>workPlace</th>
          </tr>
          {elem}
        </tbody>
      </table>
    </div>
  )
}

export default Table;