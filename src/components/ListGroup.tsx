import { MouseEvent, useState } from "react"

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    //:MouseEvent makes it typesafe so that TS knows event is of type MouseEvent and knows what methods it has (MouseEvent must be imported)
//     const handleClick = (event:MouseEvent) => {
//     console.log(event)
// }

     
    return (
        <>
        <h1>{heading}</h1>
        {/* true && an expression evaluates to the expression */}
         {items.length===0 && <p>No items found</p>}
        <ul className="list-group">
        {items.map((item, index)=>
        (<li className={selectedIndex === index? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => setSelectedIndex(index)}
            >
            {item}
        </li>
        ))}
          </ul>
    </>
  )
}


export default ListGroup