import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'React Basics', description: 'Learn components, props, and state.' },
  { id: 2, title: 'Node.js Fundamentals', description: 'Back-end JavaScript made easy.' },
  { id: 3, title: 'Machine Learning Intro', description: 'Start ML from scratch.' },
];

function Courses() {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Courses;
