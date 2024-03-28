interface BadgeProps {
    icon: string
    classExtra?: string
}

export default function Badge({ icon, classExtra }: BadgeProps) {
    return (
        <div className='h-[72px] w-[72px] rounded-full color-gradient flex justify-center items-center shadow-lg'>
            <i
                className={`text-white justify-center items-center flex h-10 w-10 ${classExtra}`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40px'
                    height='40px'
                    viewBox='0 0 24 24'
                >
                    <path width='40px' height='40px' fill='white' d={icon} />
                </svg>
            </i>
        </div>
    )
}
