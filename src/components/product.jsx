import './css/product.scss'

const Product = (props) => {
    return (
        <>
            <div className='image'>
                <img src={props.image} alt="..." /> <br />
            </div>
            <div>
                <span>{props.name}</span><br />
                <span>{props.price}$</span> <br />
                <span className='class-3'>Voir plus</span>
            </div>
        </>
    )
}

function DisplayProduct() {
    const products = [
        {
            name: 'Product 1',
            price: 100,
            image: require('../assets/profiles/profile.png')
        },
        {
            name: 'Product 2',
            price: 59,
            image: require('../assets/profiles/profile-3.jpg')
        },
        {
            name: 'Product 3',
            price: 450,
            image: require('../assets/profiles/profile-1.png')
        },
    ]
    return (
        <div id='produts'>
            {
                products.map((product) => {
                    return (
                        <div className="product-item">
                            <Product name={product.name} price={product.price} image={product.image}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div className="product-item">
                            <Product name={product.name} price={product.price} image={product.image}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div className="product-item">
                            <Product name={product.name} price={product.price} image={product.image}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div className="product-item">
                            <Product name={product.name} price={product.price} image={product.image}></Product>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayProduct