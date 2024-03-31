'use client';
import React, { useState } from 'react';
import { EducationCard } from '@/components/molecules/educationCard';
import { Title } from '@/components/atoms/text';
import { educationData, educationData1 } from '@/components/atoms/dataEducation';
import Modal from '@/components/atoms/modal';
import EducationModal from '@/components/molecules/educationModal';

export function Education(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState<any>(null);

    const handleToggleModal = (id: number) => {
        const data = educationData.find(item => item.id === id);
        setSelectedEducation(data);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='border border-slate-100  flex-col items-center justify-center w-[85%] mb-12 mx-2 p-3'>
            <Title title='Education' classNameExtra='font-mono my-4' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center'>
                {educationData1.map((item, index) => (
                    <EducationCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        onClick={() => handleToggleModal(item.id)} // Agregar onClick handler
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedEducation && (<EducationModal data={selectedEducation} onClose={() => setIsModalOpen(false)} /> 
            )}
            </Modal>
        </div>
    );
}
