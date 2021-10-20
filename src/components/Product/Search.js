import { useState } from "react"
import { useSelector } from "react-redux"
import "./search.css"
const Search=()=>{
    const [text,setText]=useState("")
    const products=useSelector(state=>state.product.products)
    const handleChange=(event)=>{
        setText(event.target.value)
    }
   
    return(
        <div class="main"> 
            <input type="text" value={text} placeholder="Start typing..." onChange={handleChange} autoFocus/>
            <div>
                {products.filter(p=>(text!=="")?p.title.toLowerCase().includes(text.toLowerCase()):false)
                        .map(p=><div className="tab">
                                    <div className="image"> <img src={p.image}/></div><div className="text">{p.title}</div>
                                </div>)}
            </div>
        </div>
    )
}

export default Search;