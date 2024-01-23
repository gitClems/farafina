import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import Page404 from "./page404";
import '../css/detail.scss'

const Detail = () => {
    const param = useParams() || null
    const selectedItem = products.find((product) => product.id === param.id);

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
                                <span>{selectedItem.name}</span>
                                <span>{selectedItem.price}$</span>
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