import React from 'react';
import Badge, { BadgeProps } from '@components/atoms/badge';
import { CardTitle } from '@/components/atoms/text';

interface EducationCardProps {
    icon?: BadgeProps;
    title?: string;
    onClick?: () => void; 
}

export function EducationCard({
    icon,
    title = '',
    onClick,
}: EducationCardProps): JSX.Element {
    return (
        <div className = 'justify-center' onClick={onClick}> {/* Agregar onClick aquí */}
            <Badge {...icon} />
            <CardTitle title= {title} />
        </div>
    );
}
