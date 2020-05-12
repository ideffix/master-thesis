import React, { useState } from 'react'
import BenchmarkItem from './BenchmarkItem'

const range = (num) => [...Array(num).keys()]

const App = () => {
    const [state, setState] = useState([])

    const onCreateClick = () =>
        setState(range(10_000).map((num) => ({ id: num, str: String(num) })))

    const onUpdateClick = () =>
        setState(state.map((s) => ({ ...s, str: s.str + '!' })))

    const onUpdate10thClick = () =>
        setState(
            state.map((s) => (s.id % 10 === 0 ? { ...s, str: s.str + '!' } : s))
        )

    const onSwapClick = () => {
        const first = state[2];
        const second = state[9997]
        setState(
            state.map((s ,i) => {
                if (i === 2) {
                    return second;
                } else if (i === 9997) {
                    return first;
                }
                return s;
            })
        )
    }

    const onClearClick = () => setState([])

    return (
        <>
            <div className={'header'}>
                <input
                    id={'create'}
                    type={'button'}
                    onClick={onCreateClick}
                    value={'Create 10.000 components'}
                />
                <input
                    id={'update'}
                    type={'button'}
                    onClick={onUpdateClick}
                    value={'Update 10.000 components'}
                />
                <input
                    id={'update10th'}
                    type={'button'}
                    onClick={onUpdate10thClick}
                    value={'Update every 10th component'}
                />
                <input
                    id={'swap'}
                    type={'button'}
                    onClick={onSwapClick}
                    value={'Swap 2 components'}
                />
                <input
                    id={'clear'}
                    type={'button'}
                    onClick={onClearClick}
                    value={'Clear components'}
                />
            </div>
            <div className={'wrapper'}>
                {state.map((s) => (
                    <BenchmarkItem obj={s} key={s.id} />
                ))}
                {state.length === 0 && <div id={'empty'}>empty</div>}
            </div>
        </>
    )
}

export default App
