import React from 'react'

import Image from 'next/image'

export interface ImageProps {
    path: string
    size: string | number
    shape?: 'circle' | 'rounded'
}

export function ShapeImage({ path, size, shape }: ImageProps): JSX.Element {
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded'
    const imageSize = typeof size === 'string' ? size : `${size}px`
    const containerStyle = {
        width: size,
        height: size,
    }

    return (
        <div
            className={`overflow-hidden ${shapeClass} `}
            style={containerStyle}
        >
            <Image
                src={path}
                alt='Circle Image'
                layout='responsive'
                width={parseInt(imageSize)}
                height={parseInt(imageSize)}
                className='size-full object-cover'
            />
        </div>
    )
}
