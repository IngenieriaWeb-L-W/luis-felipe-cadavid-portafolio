import React from 'react';
import Badge from '@components/atoms/badge';
import { CardTitle, Paragraph } from '@components/atoms/text';
import { Buttom } from '@/components/atoms/buttoms';

interface EducationModalProps {
    data: any;
    onClose: () =>void;
}

const EducationModal: React.FC<EducationModalProps> = ({ data, onClose}) => {
    const { icon, title, text, description } = data;

    return (
        <div className='p-4 bg-slate-950 flex flex-col items-center justify-center'>
            <Badge {...icon} />
            <CardTitle title={title}  />
            <Paragraph text={text}   />
            <Paragraph text={description} classNameExtra='w-[300px]' />
            <Buttom text="Close" handleClick={onClose} />
            
        </div>
    );
};

export default EducationModal;
