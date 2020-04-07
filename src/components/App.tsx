import React from 'react'

import '../styles/App.sass'

interface Props {
  firstName: string;
  lastName: string;
}

class App extends React.PureComponent<Props> {
  render(): JSX.Element {    
    return (
      <h1>
        Welcome {this.props.firstName} {this.props.lastName}!
      </h1>
    )
  }
}

export default App
