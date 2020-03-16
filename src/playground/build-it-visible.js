class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    })
  }
  render() {
    return (
      <div>
        <h1>Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{!this.state.visibility ? 'Show details' : 'Hide details'}</button>
        {this.state.visibility && (
          <div>
            <p>here are your details</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
