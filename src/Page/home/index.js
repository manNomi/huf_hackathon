import React from "react";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../shared/lib/handleNavigate";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <label onClick={handleNavigation(navigate, "/hospital")}>
        <input
          type="radio"
          value="doctor"
          onChange={() => navigate("/hospital")}
        />
        의사
      </label>
      <label onClick={handleNavigation(navigate, "/medic")}>
        <input type="radio" value="medic" onChange={() => navigate("/medic")} />
        구급대원
      </label>
    </div>
  );
};

export default HomePage;
