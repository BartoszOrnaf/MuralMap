
import React from 'react';

export const GeneralContext = React.createContext();

class GeneralProvider extends React.Component {
  state = {
    id: 0,
  }

  render() {
    return (
      <GeneralContext.Provider value={{
        state: this.state,
        setId: (currentId) => this.setState({
          id: currentId
        })
      }}>
        {this.props.children}
      </GeneralContext.Provider>
    )
  }
}

export default GeneralProvider; 