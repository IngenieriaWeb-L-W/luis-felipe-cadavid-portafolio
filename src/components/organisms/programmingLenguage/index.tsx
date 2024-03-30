import React from 'react'

import { SubTitle } from '@components/atoms/text'
import { SectionCard } from '@components/molecules/sectionCard'

export function ProgrammingLanguages(): JSX.Element {
    return (
        <div className='px-4 '>
            <SubTitle title='Programming Languages' />

            <SectionCard
                data={{
                    Python: '90%',
                    Java: '80%',
                    JavaScript: '70%',
                    TypeScript: '70%',
                    Shell: '60%',
                    Kotlin: '50%',
                    'C ++': '50%',
                    'C #': '40%',
                    R: '40%',
                }}
                textFormat='text-sm  font-sans font-light sm:font-normal font-mono px-2 py-1'
            />
        </div>
    )
}
