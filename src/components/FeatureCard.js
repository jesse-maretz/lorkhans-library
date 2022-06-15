import React, { useState } from 'react'
import "../style/Home.css"

const FeatureCard = () => {
    const [expand, setExpand] = useState(false)

    return (
        <>
        <div className="card"
            onMouseEnter={()=>setExpand(true)}
            onMouseLeave={()=>setExpand(false)}>
            {/* Will end up being props.feature.name, props.feature.descrip etc. */}
            <h2>Feature Name</h2>
        </div>
        </>
    )
}

export default FeatureCard