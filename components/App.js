class App extends React.Component{

    constructor(){
        super();

        this.state = {
            loaded: false,
            data: null,
            stopCode: null,
        }

        // Binding for setState
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    componentDidMount(){

        console.log('COMPONENT MOUNTED')

        this.getTime(localStorage.getItem('stopCode'))
    }

    getTime(sc){
        fetch(`https://arrivelah.herokuapp.com/?id=${Number(sc)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.services)
            this.setState(prevState => {
                return{
                    loaded: true,
                    data: data.services,
                    stopCode: sc
                }
            })

            localStorage.setItem('stopCode', sc)
        })
    }

    handleInputChange(e){

        // set state with the value inside input
        this.setState({
            stopCode: e.target.value
        })
    }

    handleButtonClick(){
        console.log('clicked')
        this.getTime(this.state.stopCode)
    }

    render(){
        return(
            <div>

                    <div id='form'>
                    <input type='text' value={this.state.stopCode} onChange=    {this.handleInputChange} />

                    <button onClick={this.handleButtonClick} >Update</button>
                    </div>
                
                {this.state.loaded ? this.state.data.map(bus => {
                    return(
                        <Bus key={bus.no} bus_info={bus} />
                    )
                }) : null}
            </div>
        )
    }

}