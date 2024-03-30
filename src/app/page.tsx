import LeftMenu from '@components/stencils/leftMenu'
import MainMenu from '@components/stencils/mainMenu'
import RightMenu from '@components/stencils/rightMenu'

export default function Home() {
    return (
        <div className='flex'>
            <div className='fixed left-0 top-0 h-screen w-1/4 overflow-y-auto'>
                <LeftMenu />
            </div>
            <div className='ml-64 w-3/4'>
                <MainMenu />
            </div>
            <div className='fixed right-0 top-0 h-screen w-1/4 overflow-y-auto'>
                <RightMenu />
            </div>
        </div>
    )
}
