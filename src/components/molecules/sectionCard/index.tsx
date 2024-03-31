import React from 'react'

import Badge, { BadgeProps } from '@components/atoms/badge'
import { DataHandler } from '@components/atoms/dataHandler'
import { ImageProps, ShapeImage } from '@components/atoms/shapeImage'
import { CardTitle, SubTitle } from '@components/atoms/text'

interface subData {
    [key: string]: string | number | boolean
}

interface cardProps {
    icon?: BadgeProps
    image?: ImageProps
    title?: string
    text?: string
    data?: Record<string, string | number | boolean | subData>
    textFormat?: string
}

export function SectionCard({
    icon,
    image,
    title,
    text,
    data,
    textFormat,
}: cardProps) {
    return (
        <div className='flex flex-col '>
            {icon !== undefined && (
                <div className='my-5 text-center'>
                    <Badge
                        icon={icon}
                        path={icon?.path}
                        link={icon?.link}
                        description={icon?.description}
                    />
                </div>
            )}
            {image !== undefined && (
                <div className='my-2 flex justify-center'>
                    <ShapeImage
                        path={image.path}
                        size={image.size}
                        shape={image.shape}
                    />
                </div>
            )}
            <div className=' flex-col items-center '>
                {title !== undefined && (
                    <div>
                        <SubTitle title={title} />
                    </div>
                )}
                {text !== undefined && (
                    <div>
                        <CardTitle title={text} />
                    </div>
                )}
            </div>

            {data !== undefined && (
                <DataHandler data={data} textFormat={textFormat || ''} />
            )}
        </div>
    )
}
