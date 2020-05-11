import React, { useState } from 'react'
import BenchmarkItem from './BenchmarkItem'
import { Timer, TimerItem } from './Timer'

const range = (num) => [...Array(num).keys()]

const App = () => {
    const [state, setState] = useState([]);
    return (
        <>
            <input id="create" type={'button'} value={'Create!'} onClick={() => setState(range(10_000))}/>
        <Timer
            iterations={10}
            renderChild={(num) => (
                <TimerItem num={num}>
                    <div className={'wrapper'}>
                        {state.map((num) => (
                            <BenchmarkItem num={num} key={num} />
                        ))}
                    </div>
                </TimerItem>
            )}
        />
        </>
    )
}

export default App
