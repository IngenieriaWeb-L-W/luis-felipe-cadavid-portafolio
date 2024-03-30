import { SectionCard } from '@components/molecules/sectionCard'

export function Profile(): JSX.Element {
    const size = '60%'
    return (
        <div className='px-4 '>
            <SectionCard
                image={{
                    path: '/PhotoProfile.jpg',
                    size: size,
                    shape: 'circle',
                }}
                title='Luis Felipe Cadavid Chica'
                text='Full Stack Developer'
            />
        </div>
    )
}
