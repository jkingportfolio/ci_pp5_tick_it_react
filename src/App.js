import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Routes, Route} from "react-router-dom";
import './api/axiosDefaults';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<h1>Home page</h1>} />
          <Route exact path="/signin" element={<h1>Sign in</h1>} />
          <Route exact path="/signup" element={<h1>Sign up</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
