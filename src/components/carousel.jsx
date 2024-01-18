import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
    return (

        <Carousel>
            <Carousel.Item interval={2000}>
                <img src={require('../assets/images/Page1.png')} alt="" />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={require('../assets/images/Page2.png')} alt="" />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={require('../assets/images/Page3.png')} alt="" />
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel