import { About } from '@/components/organisms/about'
import { Extraskills } from '@/components/organisms/extraSkill'
import { Languages } from '@/components/organisms/languages'
import { ProgrammingLanguages } from '@/components/organisms/programmingLenguage'
import { Profile } from '@components/organisms/profile'
import React from 'react'




const LeftMenu: React.FC = () => {
    return (
        <div>
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
            {/* <PersonalInfo />
            <ContactInfo />
            
            
            <ExtraSkills /> */}
        </div>
    )
}

export default LeftMenu
