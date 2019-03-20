class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
        
    }
    render() {
    return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey. There are some details</p>
                </div>
            )} 
        </div>
        );
    }

}
ReactDOM.render(<Visibility />, document.getElementById('app'));





// let visibility = false;
// var approot = document.getElementById('app');
// const toggleVisibility= () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
// const template = (
// <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggleVisibility}>
//     {visibility? 'Hide details' : 'Show details'}
//     </button>
//     {visibility && (<div>
//         <p>Hey. There are some details!</p>
//     </div>)}
// </div>);
// ReactDOM.render(template,approot);
// };
// render();

