class App extends React.Component{

    constructor(){
        super();

        this.state = {
            loaded: false,
            data: null,
            stopCode: null,
            key: null,
        }

        // Binding for setState
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
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
        console.log('clicked/enter-ed')
        this.getTime(this.state.stopCode)
    }

    handleKeyDown(e){
        if (e.key === 'Enter') {
            this.handleButtonClick()
            this.setState({
                key: e.key
            })
        }
    }

    render(){
        return(
            <div>
                <h1>testing-release</h1>
                    <div id='form'>
                    <input type='text' value={this.state.stopCode} onChange=    {this.handleInputChange} onKeyDown={this.handleKeyDown} />

                    <button onClick={this.handleButtonClick} >Update</button>
                    </div>
                
                <h1>{this.state.key}</h1>
                
                {this.state.loaded ? this.state.data.map(bus => {
                    return(
                        <Bus key={bus.no} bus_info={bus} />
                    )
                }) : null}
            </div>
        )
    }

}