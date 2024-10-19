'use client'

import { useRouter } from "next/navigation"
import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";

export default function ProjectCard({key, project}) {

    const router = useRouter()
    const { selectedProject, setSelectedProject } = useContext(DashboardContext)

    if (!project) {
        return null
    }

    return (
    <div
        key={key}
        className={`${project.name == selectedProject?.name ? 'bg-[#f2f2f2]' : ''} h-[100px] p-2 border border-grey rounded-md text-[0.875rem] hover:bg-[#f2f2f2] cursor-pointer`}
        onClick={() => {
            setSelectedProject(project)
            router.push(`/project/${project.id}`)
        }}
    >
        {project.name}
    </div>)
}