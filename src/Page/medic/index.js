import React from "react";
import { Container, HospitalCard, Aside, Main, PatientInfo } from "./style";

const MedicPage = () => {
  return (
    <Main>
      <Aside>
        <p>
          응급 환자 상태 입력
        </p>
        <PatientInfo placeholder="환자 상태 입력"/>
        <input type="submit" value={"전송"}/>
      </Aside>

      <Container>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={0}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>
        <HospitalCard hospital={1}>asd</HospitalCard>

      </Container>
    </Main>
  );
};

export default MedicPage;
