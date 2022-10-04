import React from "react";
import { useState, useEffect } from "react";
import { getData } from "./utils";
import Spinner from "./spinner";

const Table = () => {
  const [users, setUsers] = useState()
  const [showResults, setShowResults] = useState(false)
  const clickShow = () => setShowResults(true)
  
  useEffect(() => {
    if(showResults) {
      getData().then((obj) => {
      setUsers(JSON.parse(obj));
    });
  } 
  }, [showResults]);
  
  let elem;
  if (users === undefined) {
    elem = <Spinner />
  } else if(users) {
    elem = users.map((item, index) => {
      return <tr key={index}>
        <td>{item.name}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
        <td>{item.workPlace}</td>
      </tr>
    })
}
  const Results = () => (
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

  return (
    <div>
      <button onClick={clickShow}>Показать таблицу</button><br />
      { showResults ? <Results /> : null }
    </div>
  )
}

export default Table;