import React, { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

function Loader(props){
    const [spin, setSpin] = useState(true)

    useEffect( () => {
        const timer = setTimeout(() => setSpin(false), 3000)
    }
    )

    return(
        <div>{spin? <ClipLoader />: <span></span>}</div>
    )
}

export default Loader