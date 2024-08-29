import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import TaskList from './TaskList';
import ProjectList from './ProjectList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch tasks and projects from the API
    apiService.get('/tasks').then(response => setTasks(response.data));
    apiService.get('/projects').then(response => setProjects(response.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskList tasks={tasks} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;

