// Stateless functional component - if component doesn't need 'state' variable. Basically
// if component only has render() method, it can be converted to SFC

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // Event handlers lose binding to original 'this' object, thus we need to make bind(this) to handler method
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    // Lifecycle method - when component first time gets mounted in DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options})) // Updates options in this.state
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    // Lifecycle method - on every component update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // Lifecycle method - fires when component goes away
    componentWillUnmount() {
        console.log('ComponentWillUnmount!');
    }

    // This method will be called from a child 'Options' component -> reverses data flow: child --> parent
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        // Simpler notation if it returns only object
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
            // filter goes through all options and filers upon condition
            // if the one we clicked corresponds to the one in the array, delete it
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        // By default undefined is returned which means that all went well. If we return something else, it means it's error
        if (!option) {
            return 'Enter valid value to add item'; // Communicated back to AddOption component. Error?
        } else if (this.state.options.indexOf(option) > -1) { // Check if same already exists
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            // Array concat method
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in a hand of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}/>
            </div>
        ); // We give reference to handleDeleteOptions method to child, so that child can call parent method
    }
}

// Default values for 'IndecisionApp' component. When none is specified.
// Not needed because we're using localStorage
// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

// Default values for 'Header' component. When none is specified.
Header.defaultProps = {
    title: 'Indecision'
};

// Stateless functional component - Action
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}/>
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault(); // Prevents default form behaviour/submission

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error // Valid if property in 'state' has the same name as var in this method
        }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));