import { BrowserRouter, Routes, Route } from "react-router-dom";
import Minesweeper from "./pages/ZhuravlovArsenii";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/zhuravlov-arsenii" element={<Minesweeper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
