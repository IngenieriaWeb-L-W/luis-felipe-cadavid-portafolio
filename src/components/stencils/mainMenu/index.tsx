import React from 'react'

import { Education } from '@components/organisms/education'
import { Experience } from '@components/organisms/experience'
import { InfoMain } from '@components/organisms/infoMain'

const MainMenu: React.FC = () => {
    return (
        <div
            className='py-4 lg:py-2 '
            style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
            <div>
                <InfoMain />
            </div>
            <div className='py-4 lg:py-2'>
                <div className='py-4 lg:py-2'>
                    <Experience />
                </div>
                <div className='py-4 lg:py-2'>
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default MainMenu
