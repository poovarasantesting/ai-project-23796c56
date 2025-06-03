import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProjectPage from "./pages/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;