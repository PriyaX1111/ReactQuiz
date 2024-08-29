import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

/** Custom Hook */
import { UseFetchQuestion } from '../hooks/FetchQuestion'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError }] = UseFetchQuestion()
   

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const trace = useSelector(state => state.questions.trace)
    useEffect(() => {
        // console.log(questions)
    })

    function onSelect() {
        // console.log('radio button change')
    }

    if (isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
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