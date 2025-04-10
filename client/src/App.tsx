import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import SinglePage from "./pages/SinglePage";
import { ActiveItemProvider } from "./pages/ActiveItemContext";

function App() {
  return (
    <ActiveItemProvider>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </ActiveItemProvider>
  );
}

export default App;
