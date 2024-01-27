import { Link } from 'react-router-dom'
import './css/itemHorizontalList.scss'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'

const HorizontalItems = () => {

    const slideLeft = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft - 110
    }
    const slideRight = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft + 110
    }

    return (
        <div id="horizontalItems">
            <ChevronCompactLeft className='icon' onClick={slideLeft} size={'40px'} />
            <div className='slider'>
                <Link className='category inline-block easy-in-out duration-300'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
            </div>
            <ChevronCompactRight className='icon' onClick={slideRight} size={'40px'} />
        </div>
    )
}

export default HorizontalItems