import React from "react";
import InfoChart from "../InfoChart/InfoChart";
import InfoGrid from "../InfoGrid/InfoGrid";
import InfoTable from "../InfoTable/InfoTable";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Config } from "../../config/dev";

const Container = (props) => {
  const { contentType } = props;
  const [countryData, setCountryData] = useState(null);

  const countryInfoUrl = Config["country.api.url"];

  useEffect(() => {
    const fetchCountryData = async () => {
      let response = await fetch(countryInfoUrl);
      const data = await response.json();
      setCountryData(data);
    };
    fetchCountryData();
  }, []);

  //   console.log(countryData);

  return (
    <>
      <div style={{ marginTop: 10 }}>
        {contentType.type === "Table" ? (
          <InfoTable data={countryData}></InfoTable>
        ) : null}
        {contentType.type === "Grid" ? (
          <InfoGrid data={countryData}></InfoGrid>
        ) : null}
        {contentType.type === "Chart" ? (
          <InfoChart data={countryData}></InfoChart>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  contentType: state.typeSelector,
});

export default connect(mapStateToProps)(Container);
