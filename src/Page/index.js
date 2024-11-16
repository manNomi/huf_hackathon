import { Routes, Route } from "react-router-dom";
import Hospital from "./hospital";
import Medic from "./medic";
import Home from "./home";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medic" element={<Medic />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </>
  );
};
export default Page;
