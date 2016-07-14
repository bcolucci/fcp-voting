
const HelloButton = React.createClass({
  handleClick: function () {
    alert('Hello!');
  },
  render: function () {
    const boundClick = this.handleClick.bind(this);
    return ( <input type='button' value='Say Hello' onClick={boundClick}/> );
  }
});

ReactDOM.render(
  <HelloButton/>,
  document.querySelector('#app-container')
);
