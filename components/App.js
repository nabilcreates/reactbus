class App extends React.Component{

    constructor(){
        super();

        // Initial state
        this.state = {
            api: null,
            loaded: false,
            stopCode: 27459,
        }

        this.handleChange = this.handleChange.bind(this)
        this.updateBusTiming = this.updateBusTiming.bind(this)
    }

    // This function will run after the component mounts
    componentDidMount(){

        this.setState({loaded: false})
        
        fetch('https://arrivelah.herokuapp.com/?id=' + this.state.stopCode)
        .then(response => response.json())
        .then(json => {
            this.setState({
                api: json.services,
                loaded: true,
            })
        })
    }

    // Everytime the textbox changes, we setthe state back
    // the function passes an event for the argument
    handleChange(event){

        // event refers to the argument passed
        // target refers to the target element (in this case input)
        // value refers to the value that was newly typed
        this.setState({
            stopCode: event.target.value
        })
    }

    updateBusTiming(){

        this.setState({loaded: false})
        
        fetch('https://arrivelah.herokuapp.com/?id=' + this.state.stopCode)
        .then(response => response.json())
        .then(json => {
            this.setState({
                api: json.services,
                loaded: true,
            })
        })
    }
    
    render(){

        console.log(this.state.stopCode)

        let returnBusInfo;

        if(this.state.loaded){
            returnBusInfo = this.state.api.map((bus) => {
                return <Bus businfo={bus} />
            })
        }
        
        return (
            <div>

                {/* We need the onChange because that is how we set the value */}
                <input type='text' value={this.state.stopCode} onChange={this.handleChange}></input>
        
                <button onClick={this.updateBusTiming}>Update</button>

                {/* Renders this only when it is loaded, or else just return a h1 that says loading */}
                {this.state.loaded ? returnBusInfo : <h1>Loading...</h1>}

            </div>
        )
    }
}