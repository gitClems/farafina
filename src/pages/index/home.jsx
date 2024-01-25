import '../css/home.scss'
import MyCarousel from '../../components/carousel'
import DisplayProduct from '../../components/product'
import AutoplayCarrous from '../../components/autoplayCarous'
import HorizontalItems from '../../components/itemHorizontalList'
import Filter from '../../components/filter'

function Home() {
    return (
        <div id='home-page'>
            <section className='sec1'>
                <aside className='slides'>
                    <AutoplayCarrous></AutoplayCarrous>
                </aside>
                <div className='carous-video'>
                    <aside className='caroussel'>
                        <MyCarousel></MyCarousel>
                    </aside>
                    {/* <video width="320" height="100%" controls autoPlay loop>
                        <source src={require("../../assets/video/video1.mp4")} type="video/mp4" />
                    </video> */}
                </div>
            </section>
            <section>
                <HorizontalItems></HorizontalItems>
            </section>
            <section className='sec2'>
                <Filter></Filter>
                <DisplayProduct></DisplayProduct>
            </section>

        </div>
    )
}

export default Home