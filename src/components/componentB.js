const ComponentB = ( {array  }) => {
    return(
        <div>
            {array.map(item => <img src={item.Poster}/>)}

        </div>

    )
}
export default ComponentB