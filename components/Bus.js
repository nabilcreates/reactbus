function Bus(props){

    let bus = props.businfo

    return(
        <div className='bus'>
            <h1>{bus.no}</h1>

            <p>{Math.round(bus.next.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next.duration_ms / 60000) + ' mins'}</p>

            <p>{Math.round(bus.next2.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next2.duration_ms / 60000) + ' mins'}</p>

            <p>{Math.round(bus.next3.duration_ms / 60000) <= 0 ? 'Arriving' : Math.round(bus.next3.duration_ms / 60000) + ' mins'}</p>

        </div>
    )
}