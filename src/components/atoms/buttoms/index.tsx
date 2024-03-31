export function Buttom({
    handleClick,
    text,
}: {
    handleClick: () => void
    text: string
}) {
    return (
        <button
            className='color-gradient mt-6 h-11 w-[163px] rounded-full font-bold text-white shadow'
            type='button'
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export function Menu({ handleClick }: { handleClick: () => void }) {
    return (
        <button
            className='size-7 text-black'
            type='button'
            onClick={handleClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30px'
                height='30px'
                viewBox='0 0 24 24'
            >
                <path
                    fill='currentColor'
                    d='M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z'
                />
            </svg>
        </button>
    )
}

export function MenuX({ handleClick }: { handleClick: () => void }) {
    return (
        <button
            className='size-7 text-black'
            type='button'
            onClick={handleClick}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30px'
                height='30px'
                viewBox='0 0 24 24'
            >
                <path
                    fill='currentColor'
                    d='m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z'
                />
            </svg>
        </button>
    )
}
