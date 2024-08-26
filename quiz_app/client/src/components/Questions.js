import React, { useEffect, useState } from 'react'
import data from '../database/data'

/** Custom Hook */
import { UseFetchQuestion } from '../hooks/FetchQuestion'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError },] = UseFetchQuestion()
    const question = data[0]

    useEffect(() => {
        console.log(isLoading)
        // console.log(apiData)
        // console.log(serverError)
    })

    function onSelect() {
        // console.log('radio button change')
    }
    return (
        <div className='questions'>
            <h2 className='text-light'>{question.question}</h2>
            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type='radio'
                                value={false}
                                name='options'
                                id={`q${i}-options`}
                                onChange={onSelect()}
                            />
                            <labe className='text-primary' htmlfor={`q${i}-options`}>{q}</labe>
                            <div className='check'></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}