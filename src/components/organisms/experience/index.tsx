'use client'
import React, { useState } from 'react'

import {
    dataExperince1,
    dataExperince2,
} from '@/components/atoms/dataExperience'
import Modal from '@/components/atoms/modal'
import CardModal from '@/components/molecules/cardModal'
import { Title } from '@components/atoms/text'
import ExperienceCarousel from '@components/molecules/experienceCarousel'

export function Experience(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedExperience, setSelectedExperience] = useState<any>(null)

    const handleToggleModal = (id: number) => {
        const data = dataExperince2.find((item) => item.id === id)
        setSelectedExperience(data)
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className='mx-2 mb-12 w-[940px] flex-col items-center justify-center rounded-lg border-8 border-indigo-500 p-6 '>
            <Title title='Experience' classNameExtra='font-mono my-4' />
            <ExperienceCarousel
                data={dataExperince1}
                onClick={handleToggleModal}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedExperience && (
                    <CardModal
                        data={selectedExperience}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </Modal>
        </div>
    )
}
