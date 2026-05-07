import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

const skillList = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "TailwindCSS", icon: <BiLogoTailwindCss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> }
];

export function Skills() {
    return (
        <>
            <h2 className="text-center text-4xl">Skills</h2>
            <ul className="flex justify-center ">
                {
                    skillList.map((item) => (
                        <li key={item.name} className="flex flex-col justify-center items-center bg-blue-400 text-white px-3 py-2 m-2 rounded-md text-xl">
                            <span className="block mb-3 text-4xl">{item.icon}</span>
                            <span>{item.name}</span>
                        </li>
                    ))
                }

            </ul>
        </>
    )
}