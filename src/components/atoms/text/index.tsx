
export function Title({ title, classNameExtra }: { title: string, classNameExtra?: string }) {
    return (
        <h1 className={`text-center text-4xl font-bold ${classNameExtra}`}>
            {title}
        </h1>
    )
}

export function SubTitle({ title, classNameExtra }: { title: string, classNameExtra?: string }) {
    return (
        <h2 className= {`text-center text-2xl ${classNameExtra}`}>
            {title}
        </h2>
    )
}

export function CardTitle({ title, classNameExtra }: { title: string, classNameExtra?: string }) {
    return (
        <h3 className= {`text-center text-xl ${classNameExtra}`}>
            {title}
        </h3>
    )
}

export function Paragraph({ text, classNameExtra }: { text: string, classNameExtra?: string }) {
    return <p className= {`font-light sm:text-justify ${classNameExtra}`}>{text}</p>
}
