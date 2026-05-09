const projectLists = [
    { name: 'Tech Solutions', description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.' },
    { name: 'Tech Solution', description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.' },
    { name: 'Tech Solutios', description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.' },
];
export function Projects() {
    return (
        <>
            <h2 className="text-center text-2xl">Projects</h2>
            {
                projectLists.map((item) => (
                    <div key={item.name}>
                        <h3>{item.name}</h3>
                        <span>{item.description}</span>
                    </div>
                ))
            }
        </>
    )
}