import { useState, useEffect } from "react";
import axios from "axios";
import { ACCESS_TOKEN } from "../constants";
import SideMenu from "../components/SideMenu";
import StudentInicio from "../components/StudentInicio";
import StudentHistorial from "../components/StudentHistorial";
import Loading from "../components/Loading";

const StudentDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    axios
      .get("http://localhost:8000/api/getuser/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("error user data", error);
      });
  }, []);

  if (!userData) return <Loading />;

  const nombrecompleto = [userData.first_name + "  " + userData.last_name];

  return (
    <>
      <div className="flex h-screen bg-gray-100 overflow-y-hidden">
        <SideMenu fullname={nombrecompleto} />
        <div className="flex flex-1 overflow-hidden">
          <StudentInicio />
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
