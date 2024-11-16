import { Routes, Route } from "react-router-dom";
import Hospital from "./hospital";
import Medic from "./medic";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hospital />} />
        <Route path="/medic" element={<Medic />} />
      </Routes>
    </>
  );
};
export default Page;
