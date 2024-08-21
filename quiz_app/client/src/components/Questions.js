import React, { useState } from 'react'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    function onSelect() {
        // setChecked(true)
        console.log('radio button change')
    }
    return (
        <div className='questions'>
            <h2 className='text-light'>Simple Questions</h2>
            <ul>
                <li>
                    <input
                        type='radio'
                        value={checked}
                        name='options'
                        id='q1-option'
                        onChange={onSelect()}
                    />
                    <labe className='text-primary' htmlfor='q1-option'>option</labe>
                    <div className='check checked'></div>
                </li>
            </ul>
        </div>
    )
}