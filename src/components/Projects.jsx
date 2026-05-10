const projectLists = [
    {
        name: 'Calculator',
        description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.',
        thumb: '/projects-thumb/calculator-thumb.png'
    },
    {
        name: 'Chatbot',
        description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.',
        thumb: '/projects-thumb/chatbot-thumb.png'
    },
    {
        name: 'Random Color Picker',
        description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.',
        thumb: '/projects-thumb/random-color-picker-thumb.png'
    },
    {
        name: 'Random Password Generator',
        description: 'A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.',
        thumb: '/projects-thumb/random-password-generator-thumb.png'
    }
];
export function Projects() {
    return (
        <>
            <h2 className="text-center text-2xl">Projects</h2>
            <div className="flex">
                {
                    projectLists.map((item) => (
                        <div key={item.name}>
                            <img src={item.thumb} alt="" />
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}