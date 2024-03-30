import React from 'react'

import { SubTitle } from '@components/atoms/text'
import { SectionCard } from '@components/molecules/sectionCard'

export function About(): JSX.Element {
    const calculateAge = (birthDate: Date) => {
        const today = new Date()
        const birth = new Date(birthDate)
        let age = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--
        }
        return age
    }

    const BirthDate = '1984-12-05'

    const updateAge = () => {
        const birthDate = new Date(BirthDate)
        return calculateAge(birthDate)
    }

    return (
        <div className='px-4 '>
            <SubTitle title='About Me' />

            <SectionCard
                data={{
                    Age: updateAge(),
                    'Birth Date': BirthDate.toString(),
                    Resience: 'Calle 113 B sur # 54D-106',
                    City: 'Caldas',
                    State: 'Antioquia',
                    Country: 'Colombia',
                    Email: 'felipe.cadavid@udea.edu.co',
                    Phone: '+57 314-851-0662',
                    Freelance: 'Available',
                }}
                textFormat='text-sm font-sans font-light sm:font-normal font-mono px-2 py-1'
            />
        </div>
    )
}
