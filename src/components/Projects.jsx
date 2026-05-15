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
            <div className="flex flex-wrap">
                {
                    projectLists.map((item) => (
                        <div key={item.name} className="max-w-md">
                            <img src={item.thumb} alt="" className="rounded-t-md border-2 border-red-500" />
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                            <div className="flex justify-around items-center text-center *:w-full *:py-1 *:rounded-md mx-1 my-2">
                                <a href="#github" className="block bg-gray-100 border-2 border-blue-500 mr-1 text-blue-800">Github</a>
                                <a href="#demo" className="block bg-blue-500 text-white border-2 border-blue-500">Demo</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}