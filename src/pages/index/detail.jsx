import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import Page404 from "./page404";
import Button from "../../components/button"
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
                                <div style={{ padding: 10 }}>
                                    <div>

                                        <span>{selectedItem.name}</span> <br />
                                        {
                                            selectedItem.promo ?
                                                <div>
                                                    <span >{selectedItem.promo}$</span> <br />
                                                    <span style={{ textDecoration: 'line-through', color: 'grey' }}>{selectedItem.price}$</span>
                                                </div>
                                                :
                                                <>
                                                    <span>{selectedItem.price}$</span><br />
                                                </>
                                        }
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <Button title={"Buy"}></Button>
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