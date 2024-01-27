import { useParams } from "react-router-dom"
import "../css/categoryItems.scss"
const CategoryPage = () => {
    const param = useParams()
    return (
        <div>
            <h1>{param.id}</h1>
        </div>
    )
}

export default CategoryPage