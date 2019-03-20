//stateless functional component


class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    //used for saving and fetching data,
    //localStorage() works for string only localStorate.setItem('name', 'kunal'); , getItem(), 
    //removeItem(); localStorage.setItem('age', 23); will return "23"
    //JSON.methods() are used for storing arrays and objects

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
            this.setState(()=>({options}));
        }

        }catch(e){

        }
       
}
    //method fires if any state change occurs like array elements changed added/removed
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); //takes object and converts in string
            localStorage.setItem('options', json);
        }
}

    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePick(){
        const randomnum = Math.floor(Math.random()*(this.state.options.length));
        const option = this.state.options[randomnum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({       
                options: prevState.options.concat([option])
                    }));
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
         
        return (
            <div>
                <Header  title={title} subtitle={subtitle}/>
                <Action hasOptions = {this.state.options.length >0}
                handlePick = {this.handlePick}
                />
                <Options options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
//default props(put after declaring functinal/class )
Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component{
//     render(){
//         //console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
//remember onclick method is refrenced not called i.e this.handlePick is used not this.handlePick()

const Action = (props) =>{
    return (
        <div>
            
            <button onClick={props.handlePick} 
            disabled={!props.hasOptions}
            >What should I do?</button>

        </div>
    );

};

// class Action extends React.Component{
   
//     render(){
        
//         return (
//             <div>
                
//                 <button onClick={this.props.handlePick} 
//                 disabled={!this.props.hasOptions}
//                 >What should I do?</button>

//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
           
        <div>
             <button onClick={props.handleDeleteOptions}>Remove All</button>
             {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option)=> (<OptionComponent key={option} optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />))
            }
             </div>
            );
};
// class Options extends React.Component{
   
//     render(){
//         return (
           
//         <div>
//              <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option)=> <OptionComponent key={option} optionText={option}/>)
//             }
//             <OptionComponent />
//             </div>
//             );
//     }
// }

const OptionComponent = (props) => {
    return (<div>
            {props.optionText}
            <button onClick={(e)=>{
                props.handleDeleteOption(props.optionText);
            }}>remove</button>
    </div>);
};
// class OptionComponent extends React.Component{
//     render(){
//         return <div>
//             {this.props.optionText}
//         </div>;
//     }
// }


class AddOption extends React.Component{
   
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // if(option){
        //     this.props.handleAddOption(option);
        // }
        this.setState(()=>({error: error}));
        if(!error){
            e.target.elements.option.value ="";
        }

    }
    render(){
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            </form>
            </div>
            );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

};
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));