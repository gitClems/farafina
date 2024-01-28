import { Link } from 'react-router-dom'
import './css/itemHorizontalList.scss'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'
import { useEffect } from 'react'

const HorizontalItems = (props) => {

    const slideLeft = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft - 110
    }
    const slideRight = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft + 110
    }

    useEffect(() => {
        const items = document.querySelectorAll('.slider > .category')
        items.forEach(element => {
            element.style.borderRadius = props.borderRadius
        });
    })

    return (
        <div id="horizontalItems">
            <ChevronCompactLeft className='icon' onClick={slideLeft} size={'40px'} />
            <div className='slider'>
                <Link to={'/category/classement-1'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-2'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link to={'/category/classement-3'} className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link to={'/category/classement-4'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-5'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link to={'/category/classement-6'} className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link to={'/category/classement-7'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-8'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link to={'/category/classement-9'} className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link to={'/category/classement-10'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-11'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link to={'/category/classement-12'} className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link to={'/category/classement-13'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-14'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
                <Link to={'/category/classement-15'} className='category'>
                    <img src={require('../assets/images/Page3.png')} alt="" />
                </Link>
                <Link to={'/category/classement-16'} className='category'>
                    <img src={require('../assets/images/Page1.png')} alt="" />
                </Link>
                <Link to={'/category/classement-17'} className='category'>
                    <img src={require('../assets/images/Page2.png')} alt="" />
                </Link>
            </div>
            <ChevronCompactRight className='icon' onClick={slideRight} size={'40px'} />
        </div>
    )
}

export default HorizontalItems