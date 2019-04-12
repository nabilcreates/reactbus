class App extends React.Component{

    constructor(){
        super();

        this.state = {
            loaded: false,
            data: null,
            stopCode: 'Enter A Code',
            version_number: '2.1.6',
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

        this.setState({
            loaded: false,
        })
        
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
        this.blurInput()
    }

    handleKeyDown(e){
        if (e.key === 'Enter') {
            this.handleButtonClick()
        }
    }

    blurInput(){
        // to hide the keyboard
        document.getElementById('stopcodeinput').blur()
    }

    render(){
        return(
            <div>

                    <h6 id='version'>
                        <a href='https://github.com/renabil/reactbus'>
                            v{this.state.version_number}
                        </a>
                    </h6>
                
                    <div id='form'>
                    <input id='stopcodeinput' type='text' value={this.state.stopCode} onChange=    {this.handleInputChange} onKeyDown={this.handleKeyDown} />

                    <button onClick={this.handleButtonClick} >Update</button>
                    </div>

                    
                
                {this.state.loaded && this.state.data ? this.state.data.map(bus => {
                    return(
                        <Bus key={bus.no} bus_info={bus} />
                    )
                }) : (
                    <div id='container'>
                        <h1>Loading...</h1>
                    </div>
                )}

            </div>
        )
    }

}