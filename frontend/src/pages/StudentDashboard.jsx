import { useState } from "react";
import SideMenu from "../components/SideMenu";

const StudentDashboard = () => {
  const [studentName, setStudentName] = useState("");

  return (
    <>
      <SideMenu />
    </>
  );
};

export default StudentDashboard;
