'use client'

import React, {
    createContext,
    useEffect,
    useMemo,
    useContext,
    useState,
  } from 'react';

  export const DashboardContext = createContext(null);

  export function DashboardContextProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    // fetch all projects, store into projects
  
    const value = useMemo(
      () => ({
        projects,
        setProjects,
        selectedProject,
        setSelectedProject,
      }),
      [projects, selectedProject]
    );
  
    return (
      <DashboardContext.Provider value={value}>
        {children}
      </DashboardContext.Provider>
    );
  }