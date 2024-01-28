import '../css/home.scss'
import DisplayProduct from '../../components/product'
import HorizontalItems from '../../components/itemHorizontalList'
import Filter from '../../components/filter'
import Baniere from '../../components/banniere'

function Home() {
    return (
        <div id='home-page'>
            <section className='sec1'>
                <Baniere></Baniere>
            </section>
            <section>
                <HorizontalItems borderRadius = {'50px'}/>
            </section>
            <section className='sec2'>
                <DisplayProduct></DisplayProduct>
                <Filter></Filter>
            </section>

        </div>
    )
}

export default Home