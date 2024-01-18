import '../css/home.scss'
import MyCarousel from '../../components/carousel'
import FadItem from '../../components/fadItem'
import DisplayProduct from '../../components/product'

function Home() {
    return (
        <div id='home-page'>
            <section className='sec1'>
                <aside className='fad'>
                    <FadItem></FadItem>
                </aside>
                <aside className='carroussel'>
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