import { Routes, Route } from "react-router-dom";

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
