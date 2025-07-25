import {Link} from 'react-router-dom'
import HeroComponent from "../components/HomeComponent/HeroComponent.tsx";

export default function HomeView() {


    return(
        <>
            {/*navbar*/}
            {/*index*/}
            <h1 className='animate-blurred-fade-in bg-cyan-700 text-white flex justify-between p-1  border-black border-b-1 '>Descubre nuevas experiencias en tu viaje.</h1>
            {/*hero*/}
            <HeroComponent/>
            {/*main*/}
            <article className='border-b-5 text-white font-serif border-l-10 border-cyan-600 grid grid-cols-1 lg:grid-cols-2'>
                {/*month business*/}
                <section className=''>
                    <h1 className='  text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>¡Negocio del Mes!</h1>
                    {/*bussines article*/}
                    <article className=' bg-white text-black capitalize p-2 '>
                        {/*Business name*/}
                        <h2 className=' text-3xl flex gap-2 pb-1'>
                            Be a Man'
                        </h2>
                        <div className=' md:grid grid-cols-2 gap-2 p-2 border-cyan-500 border-2'>
                            <div className=' justify-center p-1 grid gap-1'>
                                {/*image bussines*/}
                                <img className=" lg:h-80" src={'https://scontent.fgym1-1.fna.fbcdn.net/v/t39.30808-6/292536013_181272234281438_7543689233643120396_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7Vd4txfvWmIQ7kNvwGXopQ2&_nc_oc=AdnsKsFvgMynAOhzkrqb9VAhi85FZCB98n7j-g4tYfLclcjfwBMEiKSOZRsaWXabqJpAlrSaXPa2r6n7_1s68yKd&_nc_zt=23&_nc_ht=scontent.fgym1-1.fna&_nc_gid=mMj_GLHByff9W7oBjQr1Qw&oh=00_AfS4UPf7AoBiQuAQwBBY7ZQ2TAQGEVFHuiy7FjSbECYscQ&oe=68732E9B'} alt='persy'/>

                                {/*social link business*/}
                                <Link className='bg-blue-600 py-1 flex text-white justify-center items-center gap-1' to='https://www.facebook.com/bostonbeaman'>
                                    
                                    be a man
                                </Link>
                                <Link className='bg-pink-400 py-1 flex text-white justify-center items-center gap-1' to='https://www.instagram.com/bostonbeaman?fbclid=IwY2xjawLaQEVleHRuA2FlbQIxMABicmlkETFXSzNTRU8wdVZBY013VDFUAR5qWVJMw--mDWpUBjkT98VXQ1vf4YowwwfpD-G5SMSeUDrOqFJDg64D_9FOaA_aem_675SJonfCvJCb2iNVmgbvw'>
                                    
                                    be a man
                                </Link>
                            </div>
                            {/*resumen*/}
                            <aside className='grid  gap-2  p-3'>
                                <h2 className='text-cyan-600'>Descripcion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget
                                    vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet
                                    libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras
                                    lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.
                                </p>
                                <p className='flex text-green-500 gap-1'>
                                    30-50 C/U
                                </p>
                                <Link className='gap-1 bg-cyan-600  p-1 rounded-full flex justify-center items-center  text-white ' to="https://maps.app.goo.gl/yqdt68BLbJhMpQLa9">
                                    <h1>Visitanos!</h1>
                                </Link>
                            </aside>
                        </div>
                    </article>
                </section>
                {/*last business opened*/}
                <section className=''>
                    <h1 className='  text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>¡Negocio del Mes!</h1>
                    {/*bussines article*/}
                    <article className=' bg-white text-black capitalize p-2 '>
                        {/*Business name*/}
                        <h2 className=' text-3xl flex gap-2 pb-1'>
                            Be a Man'
                        </h2>
                        <div className=' md:grid grid-cols-2 gap-2 p-2 border-cyan-500 border-2'>
                            <div className=' justify-center p-1 grid gap-1'>
                                {/*image bussines*/}
                                <img className=" lg:h-80" src={'https://scontent.fgym1-1.fna.fbcdn.net/v/t39.30808-6/292536013_181272234281438_7543689233643120396_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7Vd4txfvWmIQ7kNvwGXopQ2&_nc_oc=AdnsKsFvgMynAOhzkrqb9VAhi85FZCB98n7j-g4tYfLclcjfwBMEiKSOZRsaWXabqJpAlrSaXPa2r6n7_1s68yKd&_nc_zt=23&_nc_ht=scontent.fgym1-1.fna&_nc_gid=mMj_GLHByff9W7oBjQr1Qw&oh=00_AfS4UPf7AoBiQuAQwBBY7ZQ2TAQGEVFHuiy7FjSbECYscQ&oe=68732E9B'} alt='persy'/>

                                {/*social link business*/}
                                <Link className='bg-blue-600 py-1 flex text-white justify-center items-center gap-1' to='https://www.facebook.com/bostonbeaman'>

                                    be a man
                                </Link>
                                <Link className='bg-pink-400 py-1 flex text-white justify-center items-center gap-1' to='https://www.instagram.com/bostonbeaman?fbclid=IwY2xjawLaQEVleHRuA2FlbQIxMABicmlkETFXSzNTRU8wdVZBY013VDFUAR5qWVJMw--mDWpUBjkT98VXQ1vf4YowwwfpD-G5SMSeUDrOqFJDg64D_9FOaA_aem_675SJonfCvJCb2iNVmgbvw'>

                                    be a man
                                </Link>
                            </div>
                            {/*resumen*/}
                            <aside className='grid  gap-2  p-3'>
                                <h2 className='text-cyan-600'>Descripcion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget
                                    vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet
                                    libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras
                                    lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.
                                </p>
                                <p className='flex text-green-500 gap-1'>
                                    30-50 C/U
                                </p>
                                <Link className='gap-1 bg-cyan-600  p-1 rounded-full flex justify-center items-center  text-white ' to="https://maps.app.goo.gl/yqdt68BLbJhMpQLa9">
                                    <h1>Visitanos!</h1>
                                </Link>
                            </aside>
                        </div>
                    </article>
                </section>

            </article>
            {/*hot*/}
            <h1 className='mt-1 capitalize text-5xl font-serif italic p-1 bg-white text-cyan-600 border-cyan-600 border-l-20  flex md:justify-center'>votados por la comunidad</h1>
        </>
    )
}