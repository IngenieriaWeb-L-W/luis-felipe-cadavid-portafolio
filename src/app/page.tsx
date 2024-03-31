import LeftMenu from '@components/stencils/leftMenu'
import MainMenu from '@components/stencils/mainMenu'
import RightMenu from '@components/stencils/rightMenu'

export default function Home() {
    return (
        <div className='flex max-h-screen'>
            <div className='w-1/4'>
                <LeftMenu />
            </div>
            <div className='flex grow justify-center py-4'>
                <MainMenu />
            </div>
            <div className='w-1/12'>
                <RightMenu />
            </div>
        </div>
    )
}
