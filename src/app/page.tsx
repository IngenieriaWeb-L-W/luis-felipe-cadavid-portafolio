import LeftMenu from '@components/stencils/leftMenu'
import MainMenu from '@components/stencils/mainMenu'
import RightMenu from '@components/stencils/rightMenu'

export default function Home() {
    return (
        <div className='flex h-screen'>
            <div className='w-[65%] overflow-y-auto'>
                <LeftMenu />
            </div>
            <div className='flex grow justify-center py-4'>
                <MainMenu />
            </div>
            <div className='w-1/9'>
                <RightMenu />
            </div>
        </div>
    )
}
