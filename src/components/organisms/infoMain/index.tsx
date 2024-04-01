import React from 'react'

import { Paragraph, SubTitle, Title } from '@/components/atoms/text'
import { SectionCard } from '@components/molecules/sectionCard'

export function InfoMain(): JSX.Element {
    const size = '40%'
    return (
        <div className='mr-8 py-4 lg:py-4'>
            <div className='row-auto flex items-center justify-center rounded-lg border-8 border-indigo-500 p-6 lg:py-3 '>
                <div className='py-4 lg:py-0'>
                    <SectionCard
                        image={{
                            path: '/PhotoProfile2.jpg',
                            size: size,
                            shape: 'rounded',
                        }}
                    />
                </div>
                <div>
                    <Title
                        title="I'm Luis Felipe Cadavid"
                        classNameExtra='text-primary text-4xl'
                    />
                    <div className='py-4 lg:py-0'>
                        <SubTitle
                            title='Full Stack '
                            classNameExtra='text-primary text-3xl mx-2 text-yellow-400 font-extrabold'
                        />
                        <SubTitle
                            title=' Developer'
                            classNameExtra='text-primary text-3xl font-extrabold'
                        />
                    </div>
                </div>
            </div>
            <div className='p-4 text-white lg:py-4'>
                <Paragraph
                    text="I present myself as a professional in education and technology, with an innate dedication to the world of programming, who is currently completing his training as a Systems Engineer. I consider I have a solid technical base in programming, artificial intelligence, data science and infrastructure, as well as outstanding teamwork skills.
                    My professional background to date has been enriched by valuable experiences, starting with web development, passing through Data science and artificial intelligence and culminating in the implementation of cloud solutions. My active participation in the Co-creation Laboratory of the General Hospital of Medellín has given me the opportunity to apply my skills in projects with a direct impact on the health sector. In addition, he helped with technical support on various projects for the prestigious company Siesa.
                    In order to continue my training and growth in this vast and fascinating world, I promoted personal projects and participated in academic activities at the University of Antioquia. My training as a graduate in Physics and Mathematics not only gives me the ability to transmit and structure knowledge in a personalized way, but also gives me skills in numerical analysis and logic in different fields and contexts. I consider that I can adapt to the individual experiences and conditions of each student's environment.
                    Likewise, my Master's degree in E-learning and Social Networks gives me the ability to analyze, use and absorb knowledge about existing technology, enabling me to implement innovative methodologies, strategies and models of teaching, learning and social participation in formal environments. as informal."
                />
            </div>
        </div>
    )
}
