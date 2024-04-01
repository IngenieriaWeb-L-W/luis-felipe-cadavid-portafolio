import React from 'react'

import { About } from '@components/organisms/about'
import { Extraskills } from '@components/organisms/extraSkill'
import { Languages } from '@components/organisms/languages'
import { Profile } from '@components/organisms/profile'
import { ProgrammingLanguages } from '@components/organisms/programmingLenguage'

const LeftMenu: React.FC = () => {
    return (
        <div className='py-4 lg:py-4'>
            <div className='py-4 lg:py-0'>
                <Profile />
            </div>
            <div className='py-4 lg:py-0'>
                <About />
            </div>
            <div className='py-4 lg:py-0'>
                <ProgrammingLanguages />
            </div>
            <div className='py-4 lg:py-0'>
                <Extraskills />
            </div>

            <div className='py-4 lg:py-0'>
                <Languages />
            </div>
        </div>
    )
}

export default LeftMenu
