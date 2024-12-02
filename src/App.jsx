import "./App.css";
import ButtonComp from "./components/ButtonComp";
import HeaderComp from "./components/HeaderComp";
import { useContext } from "react";
import CountContext from "./context/CountContext";

function App() {
  const { count } = useContext(CountContext);
  const user = null; // Placeholder for user context.

  return (
    <main
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        backgroundColor: user ? "#024d1021" : "#4d020221",
        padding: ".5em",
      }}
    >
      <HeaderComp />
      <ButtonComp text="Add" />
      <div>Your result is: {count}</div>
      {/* Add more functionality, like another button, as needed */}
      {user && <div className="alert">You are now logged in!!!</div>}
    </main>
  );
}

export default App;
