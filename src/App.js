import React from "react";
import Burger1 from "./components/Burgers/Burger1";
import Burger2 from "./components/Burgers/Burger2";
import Burger3 from "./components/Burgers/Burger3";
import Burger4 from "./components/Burgers/Burger4";
import Dropdown1 from "./components/Dropdowns/Dropdown1";
import Dropdown2 from "./components/Dropdowns/Dropdown2";
import Input1 from "./components/Inputs/Input1";
import { ReactComponent as Blob1 } from "./components/Blobs/Blob1.svg";
import Container from "./components/Container";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Container>
        <Burger1 />
      </Container>
      <Container>
        <Burger2 />
      </Container>
      <Container>
        <Burger3 />
      </Container>
      <Container>
        <Burger4 />
      </Container>
      <Container>
        <Dropdown1 />
      </Container>
      <Container>
        <Dropdown2 />
      </Container>
      <Container>
        <Input1 />
      </Container>
      <Container>
        <Blob1 />
        {/* <Blob1 /> */}
      </Container>
    </div>
  );
}

export default App;
