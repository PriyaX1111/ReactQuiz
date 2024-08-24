import React from 'react'
import Questions from './Questions'

/** redux store import */
import { useSelector } from 'react-redux'

export default function Quiz() {

    useSelector()

    /**next btn event handler */
    function onNext() {
        console.log('on next')
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