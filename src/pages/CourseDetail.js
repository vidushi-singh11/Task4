import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

const courseContent = {
  1: {
    title: 'React Basics',
    videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA',
    progress: 40
  },
  2: {
    title: 'Node.js Fundamentals',
    videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    progress: 70
  },
  3: {
    title: 'Machine Learning Intro',
    videoUrl: 'https://www.youtube.com/embed/GwIo3gDZCVQ',
    progress: 25
  }
};

function CourseDetail() {
  const { id } = useParams();
  const course = courseContent[id];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{course?.title}</h2>
      <iframe width="560" height="315" src={course?.videoUrl} frameBorder="0" allowFullScreen></iframe>
      <h4>Progress</h4>
      <ProgressBar progress={course?.progress || 0} />
    </div>
  );
}

export default CourseDetail;
