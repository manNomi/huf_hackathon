const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/home/:id?" element={<Hospital />} />
        <Route path="/chat/:id" element={<Resue />} />
      </Routes>
    </>
  );
};
export default Page;
