import Item from "../Item/Item";
import { Link } from "react-router-dom";
import './itemListStyles.css'


function ItemList({ items }) {
    return (
        <div className="listItems">
            {items.map((item) => {
                return <Link to={`/item/${item.id}`}>
                    <Item {...item}/>
            </Link>
            })}
        </div>
    )
}

export default ItemList
