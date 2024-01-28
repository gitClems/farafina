import { Link } from 'react-router-dom'
import './css/product.scss'
import { products } from "../data/products"

const Product = (props) => {
    return (
        <Link className="product-item" key={props.data.id} to={`/produit/${props.data.id}`}>
            <div className='image'>
                <img src={props.data.image} alt="..." /> <br />
            </div>
            <div className='d-flex flex-col align-items-center'>
                <span>{props.data.name}</span>
                <div>
                    {
                        props.data.promo ?
                            <div>
                                <span className='text-gray-500 line-through'>{props.data.price}$</span>
                                <span className='ml-[10px]'>{props.data.promo}$</span>
                            </div>
                            :
                            <span>{props.data.price}$</span>
                    }
                </div>
            </div>
        </Link>
    )
}

function DisplayProduct() {

    return (
        <>
            <div id='produts'>
                {
                    products.map((product) => {
                        return (
                            <Product key={product.id} data={product}></Product>
                        )
                    })
                }
                {
                    products.map((product) => {
                        return (
                            <Product data={product}></Product>
                        )
                    })
                }
                {
                    products.map((product) => {
                        return (
                            <Product data={product}></Product>
                        )
                    })
                }
                {
                    products.map((product) => {
                        return (
                            <Product data={product}></Product>
                        )
                    })
                }
                {
                    products.map((product) => {
                        return (
                            <Product data={product}></Product>
                        )
                    })
                }
                {
                    products.map((product) => {
                        return (
                            <Product data={product}></Product>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DisplayProduct