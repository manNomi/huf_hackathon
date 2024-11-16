import { Routes, Route } from "react-router-dom";
import Hospital from "./hospital";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hospital />} />
      </Routes>
    </>
  );
};
export default Page;
