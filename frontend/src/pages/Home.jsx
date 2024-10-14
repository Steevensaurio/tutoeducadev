import "../styles/Home.css";
import Navbar from "../components/NavBar";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-start items-center h-screen bg-gray-100 py-0">
        {/* Primer contenedor pegado a la izquierda */}
        {/* <div className="bg-blue-200 shadow-lg rounded-r-3xl p-6 w-1/6 max-w-sm h-full">
          <h1>Hola</h1>
        </div>
        <div className="bg-blue-200 shadow-lg rounded-xl p-6 mx-4 w-full max-w-sm">
          <h1>Hola</h1>
        </div>
        <div className="bg-blue-200 shadow-lg rounded-xl p-6 mx-4 w-full max-w-sm">
          <h1>Hola</h1>
        </div> */}
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
