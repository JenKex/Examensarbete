import { FaLeaf } from "react-icons/fa";

export function MenuItem({props}) {
    // console.log(props)
    // console.log(props.ingredients)

    return <div className="menu-item">
        <h1>{props.name} {props.price} {props.isVegetarian ? <FaLeaf className="green"/> : ''}</h1>
        <p>{props.ingredients}</p>
    </div>
}