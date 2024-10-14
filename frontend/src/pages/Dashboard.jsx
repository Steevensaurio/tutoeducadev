import React, { useState } from "react";
import FormSoliTuto from "../components/FormSoliTuto";

export default function Dashboard() {
  const [mostrar, setMostrar] = useState(false);

  const handleMostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-full bg-white p-6 shadow-md overflow-y-auto">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full mr-2"></div>
          <span className="font-semibold text-lg">Learn.com</span>
        </div>
        <nav>
          <a href="#" className="flex items-center text-purple-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>Courses</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">
              Let's upgrade to premium feature
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Get access to all features
            </p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm"
              onClick={handleMostrar}
            >
              {mostrar ? "Ocultar Componente" : "Mostrar Componente"}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for notes, tasks, etc..."
              className="pl-10 pr-4 py-2 border rounded-full w-64"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {mostrar && <FormSoliTuto />}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-indigo-900 text-white p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-2">Learning is Fun!</h2>
              <p className="mb-4">Start your learning journey with us today</p>
              <button className="bg-white text-indigo-900 px-4 py-2 rounded-full">
                Get Started
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <h3 className="font-semibold mb-4">Score Statistic</h3>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Hours Spent</h3>
                <div className="h-40 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">My Progress</h3>
                <div className="flex justify-center items-center h-40">
                  <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-purple-600">
                      85%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">October 2023</h3>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>Month</span>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Schedule</h3>
              <div className="space-y-4">
                {["Calculus", "Machine Learning", "Computer Vision"].map(
                  (course, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full mr-4 flex items-center justify-center ${
                          ["bg-orange-200", "bg-blue-200", "bg-purple-200"][
                            index
                          ]
                        }`}
                      >
                        {course[0]}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{course}</h4>
                        <p className="text-sm text-gray-600">4pm - 6pm</p>
                      </div>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
