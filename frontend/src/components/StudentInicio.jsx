import React from "react";
import { Search, Bell } from "lucide-react";

export default function StudentInicio() {
  const newCourses = [
    {
      name: "Geography",
      lessons: 12,
      color: "bg-orange-100",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "JavaScript Course",
      lessons: 8,
      color: "bg-purple-100",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Photography Course",
      lessons: 6,
      color: "bg-blue-100",
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  const myCourses = [
    {
      name: "Web Design",
      date: "May 12",
      rating: 4.8,
      level: "Elementary",
      color: "bg-purple-100",
    },
    {
      name: "Development Basics",
      date: "May 15",
      rating: 4.9,
      level: "Intermediate",
      color: "bg-blue-100",
    },
    {
      name: "Data with Python",
      date: "May 17",
      rating: 4.7,
      level: "Intermediate",
      color: "bg-yellow-100",
    },
    {
      name: "UX/UI Design",
      date: "May 20",
      rating: 4.6,
      level: "Elementary",
      color: "bg-green-100",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-full text-sm"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <button className="p-2 bg-gray-200 rounded-full">
            <Bell size={18} />
          </button>
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">New Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newCourses.map((course) => (
            <div
              key={course.name}
              className={`${course.color} rounded-lg p-4 shadow`}
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-16 h-16 mb-4 rounded"
              />
              <h3 className="font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-600">{course.lessons} lessons</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Otras Tutorías</h2>
        <div className="bg-white rounded-lg shadow p-6">
          {myCourses.map((course, index) => (
            <div
              key={course.name}
              className={`flex items-center py-4 ${
                index !== myCourses.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className={`w-12 h-12 ${course.color} rounded-lg mr-4 flex items-center justify-center text-2xl font-bold`}
              >
                {course.name[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{course.name}</h3>
                <p className="text-sm text-gray-600">
                  {course.date} • {course.rating} • {course.level}
                </p>
              </div>
              <button className="text-purple-600 font-semibold">
                View all
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
