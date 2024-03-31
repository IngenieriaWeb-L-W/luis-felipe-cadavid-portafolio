'use client'
import React, { useState } from 'react'

import { educationData, educationData1 } from '@components/atoms/dataEducation'
import Modal from '@components/atoms/modal'
import { Title } from '@components/atoms/text'
import CardModal from '@components/molecules/cardModal'
import { EducationCard } from '@components/molecules/educationCard'

export function Education(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEducation, setSelectedEducation] = useState<any>(null)

    const handleToggleModal = (id: number) => {
        const data = educationData.find((item) => item.id === id)
        setSelectedEducation(data)
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className='mx-2 mb-12  w-[940px] flex-col items-center justify-center rounded-lg border-8 border-indigo-500 p-6 '>
            <Title title='Education' classNameExtra='font-mono my-4' />
            <div className='grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:grid-cols-4'>
                {educationData1.map((item, index) => (
                    <EducationCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        onClick={() => handleToggleModal(item.id)}
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedEducation && (
                    <CardModal
                        data={selectedEducation}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </Modal>
        </div>
    )
}
