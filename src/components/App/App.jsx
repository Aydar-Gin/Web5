class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    componentDidUpdate(prevProps){
        
    }
    
    render(){
        const{error, isLoaded, items} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="app">
                    <HeaderApp />
                    <ContentApp />
                    <FooterApp />
                </div>
            );
        }
    }
}