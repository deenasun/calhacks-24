'use client'

import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

export default function ProjectsFeed() {

    const router = useRouter()

    const projectArray = [{
        'id': 1,
        'name': 'Project 1',
    }, {
        'id': 2,
        'name': 'Project 2',
    }]

    const { selectedProject, setSelectedProject } = useContext(DashboardContext)

    return (
        <div className="w-full flex flex-col gap-2 overflow-y-auto">
            <div>Projects</div>
            <div className="w-full grid grid-cols-3 gap-x-4 gap-y-2 overflow-y-auto">

                {projectArray.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
