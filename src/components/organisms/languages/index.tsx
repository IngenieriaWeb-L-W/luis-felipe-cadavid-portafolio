import React from 'react'

import { SubTitle } from '@components/atoms/text'
import { SectionCard } from '@components/molecules/sectionCard'

export function Languages(): JSX.Element {
    return (
        <div className='px-4 '>
            <SubTitle title='Languages' />

            <SectionCard
                data={{
                    Spanish: '90%',
                    English: '70%',
                    Portuguese: '40%',
                }}
                textFormat='text-sm  font-sans font-light sm:font-normal font-mono px-2 py-1'
            />
        </div>
    )
}
