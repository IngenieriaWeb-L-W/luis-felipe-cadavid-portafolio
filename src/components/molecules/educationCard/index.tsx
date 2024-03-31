import React from 'react'

import { CardTitle } from '@/components/atoms/text'
import Badge, { BadgeProps } from '@components/atoms/badge'

interface EducationCardProps {
    icon?: BadgeProps
    title?: string
    onClick?: () => void
}

export function EducationCard({
    icon,
    title = '',
    onClick,
}: EducationCardProps): JSX.Element {
    return (
        <div className='justify-center' onClick={onClick}>
            <Badge {...icon} />
            <CardTitle title={title} />
        </div>
    )
}
