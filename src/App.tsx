import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import FetchedUsers from "./components/FetchedUsers";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <FetchedUsers />
      </Container>
    </div>
  );
}

export default App;
