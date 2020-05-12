import React, { useState } from 'react'

const BenchmarkItem = ({ obj }) => {
    const [highlight, setHighlight] = useState(false)
    return (
        <div
            onClick={() => setHighlight(true)}
            className={highlight ? 'highlight' : ''}
            id={obj.id}
        >
            {obj.str}
        </div>
    )
}

export default BenchmarkItem
