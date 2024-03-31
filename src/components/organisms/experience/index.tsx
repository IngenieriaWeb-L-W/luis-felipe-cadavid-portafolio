import React from 'react';
import { EducationCard } from '@/components/molecules/educationCard';
import { Title } from '@/components/atoms/text';
import { ExperienceCard } from '@/components/molecules/experienceCard';

export function Experience(): JSX.Element {
    const size = '100%'
    const sizeSVG = 120
    return (
        <div className=' border border-slate-100 flex-col items-center justify-center w-[85%] mb-12 mx-2 p-3'>
            <Title title='Experience' classNameExtra='font-mono my-4'/>
            <div className='flex flex-col items-center justify-center'>
                <ExperienceCard 
                    icon={{
                        path: '/HGMIcon.png', 
                        link: 'https://www.hgm.com.co/',
                        sizeSVG: sizeSVG, 
                        sizeImg: size,
                    }} 
                    title='Full Stack Developer' 
                    text='April 2022 - present'
                    description='I work as a full stack developer, my main functions include:
                    Back end design and development for different custom projects, development and implementation of AI models for projects,
                    design and development of front end and APP for different projects, deployment of projects in AWS, design and implementation of pedagogical
                    strategies with hospitalized children.
                    Advice and guidance on different development topics'
                />
                <ExperienceCard 
                    icon={{
                        path: '/SIESAIcon.png', 
                        link: 'https://www.siesa.com/',
                        sizeSVG: sizeSVG, 
                        sizeImg: size,
                    }} 
                    title='Staff developer' 
                    text='April 2022 - December 2022'
                    description='I worked as a staff programmer, among my main activities developed, the development
                    of customized functionalists for different clients is characterized, within the CRM
                    developed largely in Django and Angular. Also, support was provided on different topics,
                    including: connections with Google API and Outlook, new queries, updating AGR,
                    modifying use licenses, creating product surveys within the CRM.'
                />
                <ExperienceCard 
                    icon={{
                        path: '/IESFIcon.jpeg', 
                        link: 'https://www.iesanfernandoamaga.edu.co/',
                        sizeSVG: sizeSVG, 
                        sizeImg: size,
                    }} 
                    title='Physics, mathematics and programming teacher' 
                    text='July 2016 - January 2022'
                    description='Development of physics, mathematics, Algorithms, Python and computer science classes
                    and collaborator in the development of projects for the SENA technique. Founder of the
                    rural area of the villages of "Pueblito de los Sánchez" and "San José" of Amagá'
                />
                <ExperienceCard 
                    icon={{
                        path: '/IESJJIcon.jpg', 
                        link: 'https://co.institucioneducativa.info/antioquia/institucion-educativa-san-jose-2023/',
                        sizeSVG: sizeSVG, 
                        sizeImg: size,
                    }} 
                    title='Physics, mathematics and programming teacher' 
                    text='January 2012 - July 2016'
                    description='Teaching in research projects, physics and mathematics classes, coordinator of the
                    municipal science table and manager of educational and cultural events at the
                    institutional and municipal level.'
                />
                <ExperienceCard 
                    icon={{
                        path: '/UCOIcon.jpeg', 
                        link: 'https://www.uco.edu.co/',
                        sizeSVG: sizeSVG, 
                        sizeImg: size,
                        classExtra: 'bg-white'
                    }} 
                    title='University Teacher' 
                    text='July 2014 - August 2015'
                    description='Physics classes 1 and 2, calculus 1, mathematics teaching and research project 2
                    and 3 were shared with the students of the degree in Mathematics from the
                    municipalities of Sopetean, Urrao, Puerto Berrio, Ituango, Támesis and Aguadas-
                    Caldas of the Catholic University of the East.'
                />
                
            </div>
        </div>
    )
}
