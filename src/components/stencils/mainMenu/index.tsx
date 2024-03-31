import { Experience } from '@components/organisms/experience'
import { Education } from '@components/organisms/education'
import { InfoMain } from '@components/organisms/infoMain'
import React from 'react'

const MainMenu: React.FC = () => {
    return (
        <div>
            <div>
                <InfoMain />

            </div>
            <div className='flex flex-col'>
                <div>
                    <Experience />
                </div>
                <div>
                    <Education />
                </div>


            </div>
        </div>
    )
}

export default MainMenu
