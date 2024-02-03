import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import Page404 from "./page404";
import Button from "../../components/button"
import '../css/detail.scss'
import { Dash, Plus } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import DisplayProduct from '../../components/product'

const Detail = () => {
    const param = useParams() || null
    const selectedItem = products.find((product) => product.id === param.id);
    const [number, setNumber] = useState(1)

    useEffect(() => {
        const numberInner = document.querySelector('.select-product-number')
        numberInner.innerHTML = number
        const dash = document.querySelector('.dash')
        if (number === 1) {
            dash.style.color = "rgba(128,128,128,0.5)"
        }
        if (number > 1) {
            dash.style.color = "rgb(0,0,0)"
        }
    }, [number])

    return (
        <div id="detail" className="page">
            {
                selectedItem ?
                    <>
                        <div className="l-1">
                            <div className="col-1 f-flex-wrap">
                                <div className="image">
                                    <img src={selectedItem.image} alt="..." />
                                </div>
                                <div className="d-flex flex-column justify-content-between" style={{ padding: 10, }}>
                                    <div>
                                        <h2 className="title">{selectedItem.name}</h2>
                                        {
                                            selectedItem.promo ?
                                                <div>
                                                    <span className="text-gray-400 line-through" >${selectedItem.price}</span>
                                                    <span className="ml-[10px]">${selectedItem.promo}</span>
                                                </div>
                                                :
                                                <>
                                                    <span>${selectedItem.price}</span><br />
                                                </>
                                        }
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <div className="
                                            d-flex
                                            justify-content-end
                                            -webkit-user-select-none
                                            -ms-user-select-none
                                            user-select-none"
                                        >
                                            <span className="mr-[20px]">Nombre de produits</span>
                                            <div className="d-flex">
                                                <Dash onClick={() => { number - 1 < 1 ? setNumber(1) : setNumber(number - 1) }}
                                                    className="icon dash w-[30px] h-[30px] cursor-pointer border-solid border-grey-200" />
                                                <span className="select-product-number min-w-[50px] h-[30px] d-flex justify-content-center align-items-center text-[25px]"></span>
                                                <Plus onClick={() => setNumber(number + 1)} className="icon plus w-[30px] h-[30px] cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className='mt-[10px]'>
                                            <Button title={"Ajouter au panier"}></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <h3>Description</h3>
                                <p>
                                    {selectedItem.description}
                                </p>
                            </div>
                        </div>
                        <div className="l-2">
                            <DisplayProduct></DisplayProduct>
                        </div>
                    </>
                    : <Page404></Page404>
            }
        </div>
    )
}

export default Detail