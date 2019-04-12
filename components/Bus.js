function Bus(props){

    let bus = props.bus_info

    return(
        <div id='bus'>
                <div id='container'>
                    {/* Set the id to the load so that you can use it in css */}
                <h1>{bus.no}</h1>

                {/* NEXT */}
                <p  id={bus.next.load ? bus.next.load.toLowerCase() : 'noload'}  >{Math.round(bus.next.duration_ms / 60000) >= 1 ? `${Math.round(bus.next.duration_ms / 60000)} Minutes` : 'Arriving'}</p>
                <ul>
                    {/* Double Deck or Single Deck */}
                    {bus.next.type == 'DD' ? <li>Bus Type: Double Deck</li> : null}
                    {bus.next.type == 'SD' ? <li>Bus Type: Single Deck</li> : null}
                    {bus.next.type == '' ? <li>Bus Type: Single Deck</li> : null}
                </ul>

                {/* NEXT2 */}
                <p  id={bus.next2.load ? bus.next2.load.toLowerCase() : 'noload'}  >{Math.round(bus.next2.duration_ms / 60000) >= 1 ? `${Math.round(bus.next2.duration_ms / 60000)} Minutes` : 'Arriving'}</p>
                <ul>
                    {/* Double Deck or Single Deck */}
                    {bus.next2.type == 'DD' ? <li>Bus Type: Double Deck</li> : null}
                    {bus.next2.type == 'SD' ? <li>Bus Type: Single Deck</li> : null}
                    {bus.next2.type == '' ? <li>Bus Type: Single Deck</li> : null}
                </ul>

                {/* NEXT3 */}
                <p  id={bus.next3.load ? bus.next3.load.toLowerCase() : 'noload'}  >{Math.round(bus.next3.duration_ms / 60000) >= 1 ? `${Math.round(bus.next3.duration_ms / 60000)} Minutes` : 'Arriving'}</p>
                <ul>
                    {/* Double Deck or Single Deck */}
                    {bus.next3.type == 'DD' ? <li>Bus Type: Double Deck</li> : null}
                    {bus.next3.type == 'SD' ? <li>Bus Type: Single Deck</li> : null}
                    {bus.next3.type == '' ? <li>Bus Type: Unknown</li> : null}
                </ul>

                </div>
        </div>
    )
}