import React from "react";
import * as styles from "./InfoGrid.css";

const InfoGrid = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data &&
        data.map((d, i) => {
          return (
            <div className="column" key={i}>
              <div className="card">
                <p>Country : {d.name}</p>
                <p>Capital : {d.capital}</p>
                <p>Population : {d.population}</p>
                <p>Area : {d.area} sqmt</p>
                <p>Region : {d.region}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default InfoGrid;
