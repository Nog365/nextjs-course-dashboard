
export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Course Icon and Difficulty */}
      <div className="flex justify-between items-center mb-5">
        <div className="bg-blue-100 p-3 rounded-xl">
          <span className="text-3xl">📚</span>
        </div>

        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            course.difficulty === "Beginner"
              ? "bg-green-100 text-green-700"
              : course.difficulty === "Intermediate"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {course.difficulty}
        </span>
      </div>

      {/* Course Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        {course.title}
      </h2>

      {/* Instructor */}
      <p className="text-gray-600 mb-5">
        Instructor: {course.instructor}
      </p>

      {/* Category */}
      <div className="border-t border-gray-200 pt-4 mt-auto">
        <p className="text-blue-700 font-semibold">
          {course.category}
        </p>
      </div>

    </div>
  );
}
