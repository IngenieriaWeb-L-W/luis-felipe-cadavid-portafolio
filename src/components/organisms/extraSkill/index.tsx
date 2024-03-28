import React from 'react';
import { SectionCard } from '@components/molecules/sectionCard'
import { SubTitle } from '@/components/atoms/text';

export function Extraskills(): JSX.Element {

    return (
        <div className='px-4 '>
            <SubTitle title='Extra Skills' />

            <SectionCard
                                                data = 
                                                {{
                                                "Web Development": {
                                                    "Django": '90%',
                                                    "React.JS": '85%',
                                                    "Angular": '70%',
                                                },
                                                "Mobile Development": {
                                                    "React Native": '85%',
                                                    "Jetpack Compose": '60%',
                                                },
                                                "Data Science": {
                                                    "Pandas": '80%',
                                                    "Numpy": '80%',
                                                    "Matplotlib": '70%',
                                                    "Seaborn": '70%',
                                                },
                                                "Machine Learning": {
                                                    "Scikit-learn": '70%',
                                                    "Tensorflow": '60%',
                                                    "Keras": '60%',
                                                    "Pytorch": '60%',
                                                },
                                                "Image Processing": {
                                                    "OpenCV": '70%',
                                                    "Pillow": '70%',
                                                },
                                                "Databases": {
                                                    "MySQL": '80%',
                                                    "MongoDB": '70%',
                                                },
                                                "Design": {
                                                    "Figma": '80%',
                                                    "Drawio": '80%',
                                                    "Gaphor": '80%',
                                                },
                                                "DevOps": {
                                                    "Docker": '80%',
                                                    "GitHub Actions": '70%',
                                                    "Jira": '70%',
                                                    "AWS": '60%',
                                                    "Azure": '50%',
                                                    "Google Cloud": '40%',
                                                },
                                                "Tools": {
                                                    "Git": '80%',
                                                    "Postman": '70%',
                                                },

                                                "Soft Skills": {
                                                    "Teamwork": '90%',
                                                    "Problem Solving": '80%',
                                                },
                                                "Other": {
                                                    "Scrum": '80%',
                                                    "Kanban": '80%',
                                                },

                                                }}
                                                textFormat='text-sm  font-sans font-light sm:font-normal font-mono px-2 py-1'
                                            />
                                        </div>
                                    )
                                }
