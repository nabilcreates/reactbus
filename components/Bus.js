function Bus(props){

    let bus = props.businfo

    return(
        <div className='bus'>
            <h1>{bus.no}</h1>

            <p>{Math.round(bus.next.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next.duration_ms / 60000) + ' mins'}</p>
            <ul>
                <li>Type: {bus.next.type}</li>
                <li>Load: {bus.next.load}</li>
            </ul>

            <p>{Math.round(bus.next2.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next2.duration_ms / 60000) + ' mins'}</p>
            <ul>
                <li>Type: {bus.next2.type}</li>
                <li>Load: {bus.next2.load}</li>
            </ul>

            <p>{Math.round(bus.next3.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next3.duration_ms / 60000) + ' mins'}</p>
            <ul>
                <li>Type: {bus.next3.type}</li>
                <li>Load: {bus.next3.load}</li>
            </ul>

        </div>
    )
}