import React from "react";
import * as styles from "./InfoTable.css";

const InfoTable = (props) => {
  const { data } = props;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Area</th>
            <th>Population</th>
            <th>Region</th>
          </tr>
          {data &&
            data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.name}</td>
                  <td>{d.capital}</td>
                  <td>{d.area}</td>
                  <td>{d.population}</td>
                  <td>{d.region}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
