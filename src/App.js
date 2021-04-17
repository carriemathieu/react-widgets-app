import React from 'react'
import Accordion from './components/Accordion'

const items =[
    {
        title: 'What is React?',
        content: 'React is a frontent framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a fav JS lib among engineers'
    },
    {
        title: 'Why use React?',
        content: 'Use by creating components'
    }
]

export default () => {
    return (
        <div><Accordion items={items}/></div>
    )
}