import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {

	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1>value = {counterValue}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</div>
	)
}