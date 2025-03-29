import { Route, Routes } from "react-router";
import Beranda from "./Pages/Beranda";
import Admin from "./Pages/Admin";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Beranda />} path="/"></Route>
        <Route element={<Admin />} path="admin"></Route>
     
      </Routes>
    </>
  );
}

export default App;
