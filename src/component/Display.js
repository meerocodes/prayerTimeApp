const Display = ({prayerEntries}) => {
    return(
        <ul>
            {prayerEntries.slice(0, -4).map(([key, value]) => (
                <li key={key}>
                    <span>{key}: </span>
                    <span>{value}</span>
                </li>
      ))}
        
        </ul>
    )
}

export default Display;