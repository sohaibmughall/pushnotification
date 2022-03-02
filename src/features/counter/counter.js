import React from 'react'
import { Button, Text } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>

            <Button
                aria-label="Increment value"
                onPress={() => dispatch(increment())}
                title="Increment"
            />
            <Text> {count}</Text>
            <Button
                aria-label="Decrement value"
                onPress={() => dispatch(decrement())}
                title="Decrement"
            />
        </>



    )
}