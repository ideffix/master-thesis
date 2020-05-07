import React from 'react'
import BenchmarkItem from './BenchmarkItem'
import { Timer, TimerItem } from './Timer'

const range = (num) => [...Array(num).keys()]

const App = () => (
    <Timer
        iterations={10}
        renderChild={(num) => (
            <TimerItem num={num}>
                <div className={'wrapper'}>
                    {range(10_000).map((num) => (
                        <BenchmarkItem num={num} key={num} />
                    ))}
                </div>
            </TimerItem>
        )}
    />
)

export default App
