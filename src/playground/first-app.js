console.log('App js is running');

 //JSX - Javascript XML
/* let template = (
    <div>
        <h1>My tittle</h1> 
        <p>This is JSX from app.js! Changeddd</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
); */

 /*

// Create a templateTwo var JSX expression
// div 
// h1 -> CiroGG
// p-> Age: 27
// p-> Location: 
// Render templateTwo instead of template

const user = {
    name: 'Cirolele',
    age: 27,
    location: 'Buenos Aires, Argentina'
}

let userName ='Cirolele';
let age = 27;
let userLocation = 'Buenos Aires, Argentina'


const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age >= 18 && user.age) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}
    </div>
);

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
    
} */

// Create app object title/subtitle
// user title/subtitle in the template

// Only render the subtitutule and p tag if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"
/*    
const templateThree = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>           
        </ol>     
    </div>
) */

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
} 

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderAgainApp();
    }
    //    console.log(e.target.elements);
}

const appRoot = document.getElementById('app');


const cleanArray = () =>{
    app.options = [];
    renderAgainApp();
}

const onMakeDecision = () =>{
    
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    console.log(option);
    
}

const numbers = [1,2,3]

const renderAgainApp = () =>{
    let template = (
        <div>
            <h1>My tittle</h1> 
            <p>This is JSX from app.js! Changeddd</p>
            <ol>
                {
                    app.options.map((option) =>{
                        return <li key ={option}>{option}</li>
                    })
                }          
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>Make Decision</button>
            <button onClick={cleanArray}>Clean array</button>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderAgainApp();




