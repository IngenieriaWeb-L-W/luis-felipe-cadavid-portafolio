import React from 'react';
import {  Paragraph } from '@/components/atoms/text';
import Badge, { BadgeProps} from '@components/atoms/badge';

interface cardProps {
    icon?: BadgeProps;
    title?: string;
    text?: string;
    description?: string;
    textFormat?: string;
}

export function ExperienceCard({ icon, title, text, description }: cardProps): JSX.Element {
    return (
        <div className='flex flex-row items-center justify-center my-8'>
            <div className = 'flex-col items-center justify-center px-10'>
                <Badge
                    icon={icon?.icon}
                    path={icon?.path}
                    sizeSVG={icon?.sizeSVG}
                    sizeImg={icon?.sizeImg}
                    link={icon?.link}
                    description={icon?.description}
                    classExtra={`mr-4 ${icon?.classExtra}`}
                    
                />
                <div className='flex-col items-center justify-center w-[180px]' >
                    <Paragraph text={title || ''} classNameExtra='py-2' />
                    <Paragraph text={text || ''} />
                </div>  
            </div>


            <div>
                <Paragraph text={description || ''} 
                    classNameExtra='font-light text-justify'
                
                />
            </div>

        </div>
    );
}
