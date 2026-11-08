
"use client";

import { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");

  // Course categories
  const categories = [
    "All Courses",
    "Web Development",
    "Programming",
    "Design",
    "Data Science",
    "Cybersecurity",
  ];

  // Filter courses by category and search
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          LearnHub Academy
        </h1>

        <p className="text-blue-200">
          Your journey to learning starts here.
        </p>
      </header>

            
{/* Hero Section */}
<section className="text-center py-12 px-6">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">
    Welcome to LearnHub Academy!
  </h2>

  <p className="text-lg text-gray-600 mb-4">
    Explore our courses, discover new skills, and take the
    next step in your learning journey.
  </p>

  <p className="text-blue-900 font-semibold text-xl">
    Explore Our Courses
  </p>
</section>


      {/* Category Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 border border-blue-900 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Course Search Box */}
      <section className="max-w-3xl mx-auto px-6 mb-8">
        <input
          type="text"
          placeholder="Search courses by title or instructor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

            
{/* Course Counter and Clear Filters Button */}
<div className="max-w-7xl mx-auto px-6 mb-6 flex flex-wrap justify-between items-center gap-4">
  <p className="text-gray-700 text-lg font-medium">
    Showing {filteredCourses.length} of {courses.length} courses
  </p>

  <button
    onClick={() => {
      setSelectedCategory("All Courses");
      setSearchTerm("");
    }}
    className="bg-blue-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition cursor-pointer"
  >
    Clear Filters
  </button>
</div>


      {/* Course Grid and No Courses Found Message */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-5xl mb-4">🔍</div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No courses found
            </h2>

            <p className="text-gray-600">
              Try searching for a different course or selecting another category.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6">
        <p>
          © 2026 LearnHub Academy. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
