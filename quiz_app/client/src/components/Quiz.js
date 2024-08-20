import React from 'react'

export default function Quiz() {

    function onNext(){
        console.log('on next')
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* display question */}
            <div className='grid'>
                <button className='btn prev'>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}