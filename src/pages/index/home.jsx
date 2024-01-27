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
                </div>
            </section>
            <section>
                <HorizontalItems></HorizontalItems>
            </section>
            <section className='sec2'>
                <DisplayProduct></DisplayProduct>
                <Filter></Filter>
            </section>

        </div>
    )
}

export default Home