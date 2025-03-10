"use client";

import { Project, ProjectsResponse } from "@/types/project";
import { useEffect, useState } from "react";

export const useProjects = (slug?: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const endpoint = slug 
          ? `/api/projects/${slug}` 
          : "/api/projects";
        
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (slug) {
          setProject(data.data);
        } else {
          setProjects(data.data);
        }
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [slug]); // Re-fetch when slug changes

  return { 
    projects, 
    project, 
    isLoading, 
    error 
  };
};