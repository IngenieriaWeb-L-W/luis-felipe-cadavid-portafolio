'use client';   
import React, { useState } from 'react';
import { Title } from '@components/atoms/text';
import { dataExperince1, dataExperince2 } from '@/components/atoms/dataExperience'; 
import ExperienceCarousel from '@components/molecules/experienceCarousel';
import Modal from '@/components/atoms/modal';
import CardModal from '@/components/molecules/cardModal';



export function Experience(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<any>(null);

    const handleToggleModal = (id: number) => {
        const data = dataExperince2.find(item => item.id === id);
        setSelectedExperience(data);
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div className='border border-slate-100 flex-col items-center justify-center w-[940px] mb-12 mx-2 p-3'>
            <Title title='Experience' classNameExtra='font-mono my-4' />
            <ExperienceCarousel data={dataExperince1} onClick={handleToggleModal}/>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedExperience && <CardModal data={selectedExperience} onClose={() => setIsModalOpen(false)} />}
            </Modal>
        </div>
    );
}
