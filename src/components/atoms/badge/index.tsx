import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Paragraph } from '@components/atoms/text'

export interface BadgeProps {
    icon?: any
    path?: string
    sizeSVG?: string | number
    sizeImg?: string | number
    link?: string
    description?: string
    classExtra?: string
}

export default function Badge({
    icon,
    path,
    sizeSVG,
    sizeImg,
    link,
    description,
    classExtra,
}: BadgeProps) {
    return (
        <div className={`flex flex-col items-center py-3 ${classExtra}`}>
            <a href={link} target='_blank' rel='noreferrer'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={sizeSVG}
                    height={sizeSVG}
                    viewBox='0 0 20 20'
                >
                    <FontAwesomeIcon icon={icon} />
                    <image href={path} width={sizeImg} height={sizeImg} />
                </svg>
            </a>

            <Paragraph
                text={description || ''}
                classNameExtra='text-white font-light text-xs '
            />
        </div>
    )
}
