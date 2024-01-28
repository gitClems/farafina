import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import Page404 from "./page404";
import Button from "../../components/button"
import '../css/detail.scss'
import { Dash, Plus } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Detail = () => {
    const param = useParams() || null
    const selectedItem = products.find((product) => product.id === param.id);
    const [number, setNumber] = useState(1)

    useEffect(() => {
        const numberInner = document.querySelector('.select-product-number')
        numberInner.innerHTML = number
        const dash = document.querySelector('.dash')
        if(number === 1) {
            dash.style.color = "rgba(128,128,128,0.5)"
        }
        if(number > 1){
            dash.style.color = "rgb(0,0,0)"
        }
    }, [number])

    const Add = () => {
        const numberInner = document.querySelector('.select-product-number')
        setNumber(number + 1)
        numberInner.innerHTML = number
    }

    const Min = () => {
        const numberInner = document.querySelector('.select-product-number')
        if (number - 1 < 1) {
            setNumber(1)
        } else {
            setNumber(number - 1)
        }
        numberInner.innerHTML = number
    }

    return (
        <div id="detail">
            {
                selectedItem ?
                    <>
                        <div className="l-1">
                            <div className="col-1">
                                <div className="image">
                                    <img src={selectedItem.image} alt="..." />
                                </div>
                                <div style={{ padding: 10 }}>
                                    <div>

                                        <span>{selectedItem.name}</span> <br />
                                        {
                                            selectedItem.promo ?
                                                <div>
                                                    <span className="text-gray-400 line-through" >{selectedItem.price}$</span>
                                                    <span className="ml-[10px]">{selectedItem.promo}$</span>
                                                </div>
                                                :
                                                <>
                                                    <span>{selectedItem.price}$</span><br />
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

                                            <Dash onClick={Min} className="dash w-[30px] h-[30px] cursor-pointer" />
                                            <span className="select-product-number min-w-[50px] h-[30px] d-flex justify-content-center align-items-center">/</span>
                                            <Plus onClick={Add} className="plus w-[30px] h-[30px] cursor-pointer" />
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
                        <div className="l-2"></div>
                    </>
                    : <Page404></Page404>
            }
        </div>
    )
}

export default Detail