class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options :[]
        };
    }

    handlePickOption(){        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const optionRandomlySelected = this.state.options[randomNum];
        alert(optionRandomlySelected);
    }
    
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }

    handleAddOption(option){      
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }  


        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        })
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options =['Thing one', 'Thing two', 'Thing four']

        return(
        <div>        
            <Header title={title} subtitle={subtitle}/>
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
            />
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
        </div>
        )}
}

class Header extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{      
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePickOption}
                    disabled={!this.props.hasOptions}
                    >
                    What should i do?
                </button>                
            </div>
        )
    }
}

class Options extends React.Component{    
    render(){        
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>                
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <Option/>           
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return{
                error: error
            }
        })

    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))