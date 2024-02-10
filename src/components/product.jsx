import { Link } from 'react-router-dom'
import './css/product.scss'
import { products } from "../data/products"
import { getToTop } from './scollUp'

const Product = (props) => {
    return (
        <Link className="product-item" key={props.data.id} to={`/produit/${props.data.id}`}
            onClick={getToTop}
        >
            <div className='image'>
                <img src={props.data.image} alt="..." /> <br />
            </div>
            <div className='m-[10px]'>
                <p className='overflow-hidden text-ellipsis text-nowrap'>{props.data.name}</p>
                <div>
                    {
                        props.data.promo ?
                            <div>
                                <span className='text-gray-500 line-through'>${props.data.price}</span>
                                <span className='ml-[10px]'>${props.data.promo}</span>
                            </div>
                            :
                            <span>${props.data.price}</span>
                    }
                </div>
            </div>
        </Link>
    )
}

function DisplayProduct(props) {

    var array = []
    if (props.lenght) {
        for (let index = 0; index < props.lenght; index++) {
            array.push(products[index]);
        }
    } else {
        array = products
    }

    return (
        <>
            <div id='produts'>
                {array.map((product) => { return (<Product data={product}></Product>) })}
            </div>
        </>
    )
}

export default DisplayProduct