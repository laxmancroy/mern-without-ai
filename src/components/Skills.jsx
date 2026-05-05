const skillList = [
    { name: "HTML", icon: "" }
    { name: "CSS", icon: "" },
    { name: "JavaScript", icon: "" },
    { name: "ReactJS", icon: "" },
    { name: "NodeJS", icon: "" },
    { name: "PostgreSQL", icon: "" },
    { name: "TailwindCSS", icon: "" },
    { name: "Git", icon: "" },
    { name: "Docker", icon: "" },
    { name: "TypeScript", icon: "" }
]

export function Skills() {
    return (
        <ul>
            {
                skillList.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))
            }

        </ul>
    )
}