import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../components/ProtectedLayout";
import Clients from "../pages/Clients";
import Login from "../pages/Login";
import RandomCats from "../pages/RandomCats";
import RandomDogs from "../pages/RandomDogs";
import RandomUsers from "../pages/RandomUsers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedLayout>
            <RandomUsers />
          </ProtectedLayout>
        }
      />
      <Route
        path="/random-cats"
        element={
          <ProtectedLayout>
            <RandomCats />
          </ProtectedLayout>
        }
      />
      <Route
        path="/random-dogs"
        element={
          <ProtectedLayout>
            <RandomDogs />
          </ProtectedLayout>
        }
      />
      <Route
        path="/clients"
        element={
          <ProtectedLayout>
            <Clients />
          </ProtectedLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
