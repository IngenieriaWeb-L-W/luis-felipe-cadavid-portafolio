export function Title({ title }: { title: string }) {
    return (
        <h1 className='text-secondary font-light text-center text-4xl'>
            {title}
        </h1>
    )
}

export function SubTitle({ title }: { title: string }) {
    return (
        <h2 className='text-secondary font-light text-center text-2xl'>
            {title}
        </h2>
    )
}

export function CardTitle({ title }: { title: string }) {
    return (
        <h3 className='text-secondary font-light text-center text-xl'>
            {title}
        </h3>
    )
}

export function Paragraph({ text }: { text: string }) {
    return (
        <p className='text-tertiary font-light sm:text-justify'>
            {text}
        </p>
    )
}
