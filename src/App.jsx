import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFount";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route index path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;