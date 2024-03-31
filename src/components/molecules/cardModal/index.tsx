import React from 'react'

import { Buttom } from '@/components/atoms/buttoms'
import Badge from '@components/atoms/badge'
import { CardTitle, Paragraph } from '@components/atoms/text'

interface CardModalProps {
    data: any
    onClose: () => void
}

const CardModal: React.FC<CardModalProps> = ({ data, onClose }) => {
    const { icon, title, text, description } = data

    return (
        <div className='flex flex-col items-center justify-center bg-slate-950 p-4'>
            <Badge {...icon} />
            <CardTitle title={title} />
            <Paragraph text={text} />
            <Paragraph text={description} classNameExtra='w-[300px]' />
            <Buttom text='Close' handleClick={onClose} />
        </div>
    )
}

export default CardModal
