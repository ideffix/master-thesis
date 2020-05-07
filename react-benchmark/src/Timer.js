import React, { useEffect, useState } from 'react'

export const Timer = ({ renderChild, iterations }) => {
    const [state, setState] = useState(0)
    const [times, setTimes] = useState([Date.now()])
    useEffect(() => {
        if (state < iterations) {
            setState(state + 1)
            setTimes([...times, Date.now()])
        }
    }, [state, iterations, times])

    return (
        <>
            {times.length === iterations + 1 && renderTimes(times)}
            {renderChild(state)}
        </>
    )
}

const renderTimes = (times) => {
    const deltas = []
    for (let i = 1; i < times.length; i++) {
        deltas.push(times[i] - times[i - 1])
    }
    return (
        <table>
            <thead>
                <tr>
                    {deltas.map((_, i) => (
                        <th key={i}>Iteration: {i}</th>
                    ))}
                    <th>Average:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {deltas.map((delta, i) => (
                        <td key={i}>{`${delta} milis`}</td>
                    ))}
                    <td>
                        {deltas.reduce((acc, b) => acc + b, 0) / deltas.length}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export const TimerItem = ({ num, children }) => (
    <div className={num}>{children}</div>
)
