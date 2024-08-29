import React, { useEffect } from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/FetchQuestion';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'

export default function Quiz() {

    // const state = useSelector(state => state.questions.trace);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(trace)
    })

    /**next btn event handler */
    function onNext() {
        console.log('on next click')
        if (trace < queue.length) {
            /** update the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());
        }

    }

    /**prev btn event handler */
    function onPrev() {
        console.log('on Prev')
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* display question */}
            <Questions />
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}