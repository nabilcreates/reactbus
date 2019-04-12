class Bus extends React.Component{

    constructor(){
        super()
    }

    returnBusType(bus_type){
        if(bus_type =='DD'){
            return 'Single'
        } else if(bus_type == 'SD'){
            return 'Double'
        }else{
            return 'Unkown'
        }
    }

    render(){
        let bus = this.props.bus_info

        return(
            <div id='bus'>
                    <div id='container'>
                        {/* Set the id to the load so that you can use it in css */}
                    <h1>{bus.no}</h1>

                    {/* NEXT */}
                    <p  id={bus.next.load ? bus.next.load.toLowerCase() : 'noload'}  >{Math.round(bus.next.duration_ms / 60000) >= 1 ? `${Math.round(bus.next.duration_ms / 60000)} Minutes [${this.returnBusType(bus.next.type)}]` : `Arriving [${this.returnBusType(bus.next.type)}]`}</p>

                    <p  id={bus.next2.load ? bus.next2.load.toLowerCase() : 'noload'}  >{Math.round(bus.next2.duration_ms / 60000) >= 1 ? `${Math.round(bus.next2.duration_ms / 60000)} Minutes [${this.returnBusType(bus.next2.type)}]` : `Arriving [${this.returnBusType(bus.next2.type)}]`}</p>

                    <p  id={bus.next3.load ? bus.next3.load.toLowerCase() : 'noload'}  >{Math.round(bus.next3.duration_ms / 60000) >= 1 ? `${Math.round(bus.next3.duration_ms / 60000)} Minutes [${this.returnBusType(bus.next3.type)}]` : `Arriving [${this.returnBusType(bus.next3.type)}]`}</p>


                    </div>
            </div>
        )
    }
}