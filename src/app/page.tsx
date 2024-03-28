import LeftMenu from '@components/stencils/leftMenu'
import MainMenu from '@components/stencils/mainMenu'
import RightMenu from '@components/stencils/rightMenu'

export default function Home() {
    return (
        <div className='flex'>
            <div className='w-1/4 h-screen fixed left-0 top-0 overflow-y-auto'>
                <LeftMenu />
            </div>
            <div className='w-3/4 ml-64'>
                <MainMenu />
            </div>
            <div className='w-1/4 h-screen fixed right-0 top-0 overflow-y-auto'>
                <RightMenu />
            </div>
        </div>
    )
}
