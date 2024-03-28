import React from 'react'

export interface ImageProps {
    path: string
    size: string | number
    shape?: 'circle' | 'rounded'
}

export function ShapeImage({path, size, shape}: ImageProps): JSX.Element {
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded';
    const containerStyle = {
        width: size,
        height: size,
    };
    
    return (
        <div className={`overflow-hidden ${shapeClass} `} style={containerStyle} >
            <img
                src={path}
                alt='Circle Image'
                className='object-cover w-full h-full'
            />
        </div>
    )
}
