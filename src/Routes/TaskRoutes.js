import React from 'react';
import { Routes, Route } from "react-router-dom";

// Layouts
import Header from "../Layouts/Header";

// Pages
import Task from "../Pages/Task.js";

const TaskRoutes = (
    <Routes>
      <Route exact path="/" element={
        <>
            <Header/>
            <Task/>
        </>
      } />
    </Routes>
  );

export default TaskRoutes;
