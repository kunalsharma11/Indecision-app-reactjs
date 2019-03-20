
const app = {
    title: 'Indecision App',
    subtitle: 'Just learing react js',
    options: ['hey']
};
function getSubtitle(subtitle){
    if(subtitle){
        return <p>The subtitle is: {subtitle}</p>
    }
}
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    //console.log(option);

    if(option.length>0){
        app.options.push(option);
        e.target.elements.option.value= '';
        renderFunction();
    };
    
};
const onMakedecision = () => {
    const randomnum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomnum];
    console.log(randomnum);
    alert(option);
};
const submitRemove = () => {
        app.options = [];
        renderFunction();
};
var approot = document.getElementById('app');
const numbers = [55, 101, 1000];

const renderFunction= () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>The subtitle is: {app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
           <button disabled = {app.options.length ===1} onClick={onMakedecision}>What should I do?</button>
            <button onClick={submitRemove}>Remove All</button>
            {
              /* numbers.map((number) => {
                   return <p key={number}>Number: {number*2}</p>;
               })*/
            }
            <ol>{
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,approot);
};
renderFunction();