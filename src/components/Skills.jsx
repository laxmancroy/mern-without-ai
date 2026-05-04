const skillList = [
    {
        name: 'html',
        progress: 90
    },
    {
        name: 'css',
        progress: 80
    }
]

export function Skills() {
    return (
        <div>
            {
                skillList.map((val) => (
                    <h2 key={val.name}>{val.name}</h2>
                ))
            }

        </div >
    )
}