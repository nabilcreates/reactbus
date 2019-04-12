class Bus extends React.Component{

    constructor(){
        super()

        this.returnBusTiming = this.returnBusTiming.bind(this)
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

    returnBusTiming(timing_ms){
        let bus = this.props.bus_info

        if (Math.round(timing_ms / 60000) >= 1){
            return `${Math.round(timing_ms / 60000)} Minutes (${this.returnBusType(bus.next.type)})`
        }else if (Math.round(timing_ms / 60000 < 1 && timing_ms !== null)){
            return `Arriving (${this.returnBusType(bus.next.type)})`
        }else{
            return 'Unknown'
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
                    <p  id={bus.next.load ? bus.next.load.toLowerCase() : 'noload'}>{this.returnBusTiming(bus.next.duration_ms)}</p>

                    <p  id={bus.next2.load ? bus.next2.load.toLowerCase() : 'noload'}>{this.returnBusTiming(bus.next2.duration_ms)}</p>

                    <p  id={bus.next3.load ? bus.next3.load.toLowerCase() : 'noload'}>{this.returnBusTiming(bus.next3.duration_ms)}</p>


                    </div>
            </div>
        )
    }
}