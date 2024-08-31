import React, { useEffect } from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'

export default function Quiz() {
    const [check, setChecked] = useState(undefined)
    const state = useSelector(state => state);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(state)
    })

    /**next btn event handler */
    function onNext() {
        console.log('on next click')
        if (trace < queue.length) {
            /** update the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());
            dispatch(PushAnswer(check))
        }

    }

    /**prev btn event handler */
    function onPrev() {
        console.log('on Prev')
    }

    function onChecked(check) {
        console.log(check)
        setChecked(check)
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* display question */}
            <Questions onChecked={onChecked}/>
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}