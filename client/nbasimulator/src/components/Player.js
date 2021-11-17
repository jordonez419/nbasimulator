import react from 'react'

const Player = (props) => {
    const { player } = props
    console.log(props, 'props from each player')
    return (
        <div>
            {player.player_name}
        </div>
    )
}

export default Player