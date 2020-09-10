import React from 'react';
class Loading extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img className='App-logo' src={require('./images/loading.gif')} />
                </header>
            </div>
        );
    }
}

export default Loading;