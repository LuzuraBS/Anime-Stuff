import { useState } from 'react'
import './css/AniWeb.css'

const hobbies = [
    { title: "Bakugo", isFavorite: true, upVote: 0, id: 1},
    { title: "Midoriya", isFavorite: false, upVote: 0, id: 2}
]

export default function AnimeVoting() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} style={  { color: hobby.isFavorite ? 'magenta' : 'white'  }   }>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return (
        <>
            <h1 className='header'>AnimeVotingSystem</h1>
            <ul>{listItems}</ul>
        </>
    )
}


function VoteButton() {
    const [vote, setVote] = useState(0)

    function handleClick() {
        setVote(vote + 1)
    }


    return (
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}