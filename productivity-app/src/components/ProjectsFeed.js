'use client'

import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsFeed() {

    const projectArray = [{
        'id': 1,
        'name': 'Project 1',
    }, {
        'id': 2,
        'name': 'Project 2',
    }]

    const {selectedProject, setSelectedProject} = useContext(DashboardContext)

    return (
        <div className="flex flex-col gap-2 overflow-y-auto">
            <div>Projects</div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 overflow-y-auto">

            {projectArray.map((project) => (
                <div
                    className={`${project.name == selectedProject?.name ? 'bg-[#f2f2f2]' : ''} p-2 border border-grey rounded-sm text-[0.875rem] hover:bg-[#f2f2f2] cursor-pointer`}
                    onClick={() => setSelectedProject(project)}
                >
                    {project.name}
                </div>
            ))}
            </div>
        </div>
    );
}
