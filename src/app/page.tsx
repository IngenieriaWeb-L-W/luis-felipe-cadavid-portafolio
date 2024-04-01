import LeftMenu from '@components/stencils/leftMenu'
import MainMenu from '@components/stencils/mainMenu'
import RightMenu from '@components/stencils/rightMenu'

export default function Home() {
    return (
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/4'>
                <LeftMenu />
            </div>
            <div className='w-full lg:w-2/3'>
                <MainMenu />
            </div>
            <div className=' w-screen lg:w-1/12'>
                <RightMenu />
            </div>
        </div>
    )
}
