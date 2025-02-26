export function MenuItem({props}) {
    // console.log(props)
    // console.log(props.ingredients)

    return <div className="menu-item">
        <h1>{props.name} {props.price}</h1>
        <p>{props.ingredients}</p>
    </div>
}