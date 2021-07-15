import React from 'react';
import marked from 'marked';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: placeholder
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange (event) {
        this.setState({
            text: event.target.value,
        });
    }

    handleClear () {
        this.setState({
            text: ''
        })
    }

    render() {
        const text = this.state.text;
        const markdown = marked(text);

        return (
            <div className='container row d-flex justify-content-center'>

                <h1 className='title-top text-center' >Markdown previewer</h1>

                <div className='col border border-1 rounded d-flex flex-column'>
                    
                    <h3>Add your markdown</h3>
                    <textarea id='editor' className='border border-1 rounded' value={this.state.text} onChange={this.handleChange} />
                    <input type='button' value='clear' className='justify-content-center btn btn-primary text-center' onClick={this.handleClear} />

                </div>

                <div className='col border border-1 rounded d-flex flex-column'>

                    <h3>Preview</h3>
                    <div id='preview' className='border border-1 rounded' dangerouslySetInnerHTML={{__html: markdown}}>
                    </div>
                     
                </div>

            </div>
            
        )
    }

}

const placeholder = 
`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff
`

export default App;