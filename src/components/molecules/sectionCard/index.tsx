import React from 'react';
import { ImageProps, ShapeImage } from '@/components/atoms/shapeImage'
import Badge from '@components/atoms/badge'
import { CardTitle, SubTitle } from '@components/atoms/text'
import { DataHandler } from '@/components/atoms/dataHandler';

interface subData {
    [key: string]: string | number | boolean;
}

interface cardProps {
    icon?: string;
    image?: ImageProps;
    title?: string;
    text?: string;
    data?: Record<string, string | number | boolean | subData>;
    textFormat?: string;
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
        <div className='flex flex-col px-2 '>
            {icon !== undefined && (
                <div className='my-5 text-center'>
                    <Badge icon={icon} />
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
            <div className=' mb-1 items-center flex-col '>
                {title !== undefined && (
                    <div >
                        <SubTitle title={title} />
                    </div>
                )}
                {text !== undefined && (
                    <div > 
                        <CardTitle title = {text} />
                    </div>
                )}
            </div>

            {data !== undefined && (
                <DataHandler data={data} textFormat={textFormat || ''} />
            )}
        </div>
    );
}