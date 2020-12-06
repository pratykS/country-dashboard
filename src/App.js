import React from "react";
import Container from "./components/Container/Container";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

/**
 *
 * App Container - contains the component
 *
 */
const App = () => (
  <div>
    <ToggleSwitch></ToggleSwitch>
    <Container></Container>
  </div>
);

export default App;
