import { Route, Routes } from "react-router-dom";
import Clients from "../pages/Clients";
import Login from "../pages/Login";
import RandomCats from "../pages/RandomCats";
import RandomDogs from "../pages/RandomDogs";
import RandomUsers from "../pages/RandomUsers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RandomUsers />} />
      <Route path="/random-cats" element={<RandomCats />} />
      <Route path="/random-dogs" element={<RandomDogs />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};

export default AppRoutes;
