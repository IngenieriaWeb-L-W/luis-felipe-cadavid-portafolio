import React from 'react'

import { Education } from '@components/organisms/education'
import { Experience } from '@components/organisms/experience'
import { InfoMain } from '@components/organisms/infoMain'

const MainMenu: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
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
