import '../css/home.scss'
import MyCarousel from '../../components/carousel'
import DisplayProduct from '../../components/product'
import AutoplayCarrous from '../../components/autoplayCarous'

function Home() {
    return (
        <div id='home-page'>
            <section className='sec1'>
                <aside className='slides'>
                    <AutoplayCarrous></AutoplayCarrous>
                </aside>
                <aside className='caroussel'>
                    <MyCarousel></MyCarousel>
                </aside>
            </section>
            <section className='sec2'>
                <DisplayProduct></DisplayProduct>
            </section>

        </div>
    )
}

export default Home