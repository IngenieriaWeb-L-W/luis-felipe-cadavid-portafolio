import React from 'react'

import { About } from '@components/organisms/about'
import { Extraskills } from '@components/organisms/extraSkill'
import { Languages } from '@components/organisms/languages'
import { Profile } from '@components/organisms/profile'
import { ProgrammingLanguages } from '@components/organisms/programmingLenguage'

const LeftMenu: React.FC = () => {
    return (
        <div className='flex max-h-screen max-w-sm flex-col'>
            <div className='py-4'>
                <Profile />
            </div>
            <div className='py-4'>
                <About />
            </div>
            <div className='py-4'>
                <ProgrammingLanguages />
            </div>
            <div className='py-4'>
                <Extraskills />
            </div>

            <div className='py-4'>
                <Languages />
            </div>
        </div>
    )
}

export default LeftMenu
