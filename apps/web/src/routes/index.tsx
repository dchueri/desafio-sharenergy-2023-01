import { Route, Routes } from "react-router-dom";
import RandomUsers from "../pages/RandomUsers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RandomUsers />} />
    </Routes>
  );
};

export default AppRoutes;
