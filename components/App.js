class App extends React.Component{

    constructor(){
        super();
        this.state = {
            api: null,
            loaded: false,
        }
    }

    componentDidMount(){
        let id = 28031
        
        fetch('https://arrivelah.herokuapp.com/?id=' + id)
        .then(response => response.json())
        .then(json => {
            this.setState({
                api: json.services,
                loaded: true,
                stopCode: id,
            })
        })
    }
    
    render(){

        let returnBusInfo;

        if(this.state.loaded){
            returnBusInfo = this.state.api.map((bus) => {
                return <Bus businfo={bus} />
            })
        }
        
        return (
            <div>
                <h1 className='header'>Stop: {this.state.stopCode}</h1>
                {this.state.loaded ? returnBusInfo : <h1>Loading...</h1>}
            </div>
        )
    }
}