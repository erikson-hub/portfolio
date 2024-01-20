import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Experience from '../pages/experience/Experience';
import Projects from '../pages/projects/Projects';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<About></About>}></Route>
      <Route path='/experience' element={<Experience></Experience>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
    </Routes>
  );
};

export default AppRouter;
