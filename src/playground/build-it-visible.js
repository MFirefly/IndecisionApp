class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This is some text that is toggled on and off.</p>
                    </div>
                )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// let isVisible = false;
//
// const onButtonClick = () => {
//     isVisible = !isVisible;
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onButtonClick}>
//                 {isVisible ? 'Hide details' : 'Show details'}
//             </button>
//             {isVisible && (
//                 <div>
//                     <p>This is some text that is toggled on and off.</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, document.getElementById('app'));
// };
//
// render();