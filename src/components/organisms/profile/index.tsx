import { SectionCard } from '@components/molecules/sectionCard'

export function Profile(): JSX.Element {
    return (
        <div className='px-4 '>
            <SectionCard
                image={{
                    path: "/PhotoProfile.jpg",
                    size: '50%',
                    shape: 'circle',
                }}
                title='Luis Felipe Cadavid Chica'
                text='Full Stack Developer'

            />
        </div>
    )
}
