import UserAge from "./components/AgeCalculator.jsx"
import NavBar from "./components/NavBar.jsx"
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form.jsx";
import Operation from "./components/Operation.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Operation />} />
        <Route path="/Age" element={<UserAge />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
export default App;