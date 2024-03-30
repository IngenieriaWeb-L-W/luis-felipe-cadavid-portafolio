export function Title({ title }: { title: string }) {
    return (
        <h1 className='text-center text-4xl font-light text-secondary'>
            {title}
        </h1>
    )
}

export function SubTitle({ title }: { title: string }) {
    return (
        <h2 className='text-center text-2xl font-light text-secondary'>
            {title}
        </h2>
    )
}

export function CardTitle({ title }: { title: string }) {
    return (
        <h3 className='text-center text-xl font-light text-secondary'>
            {title}
        </h3>
    )
}

export function Paragraph({ text }: { text: string }) {
    return <p className='font-light text-tertiary sm:text-justify'>{text}</p>
}
