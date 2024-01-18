import './css/product.scss'

const Product = (props) => {
    return (
        <>
            <span>{props.name}</span><br />
            <span>{props.price}$</span>
        </>
    )
}

function DisplayProduct() {
    const products = [
        {
            name: 'Product 1',
            price: 100
        },
        {
            name: 'Product 2',
            price: 59
        },
        {
            name: 'Product 3',
            price: 450
        },
    ]
    return (
        <div id='produts'>
            {
                products.map((product) => {
                    return (
                        <div id="product-item">
                            <Product name={product.name} price={product.price}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div id="product-item">
                            <Product name={product.name} price={product.price}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div id="product-item">
                            <Product name={product.name} price={product.price}></Product>
                        </div>
                    )
                })
            }
            {
                products.map((product) => {
                    return (
                        <div id="product-item">
                            <Product name={product.name} price={product.price}></Product>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayProduct