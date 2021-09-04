import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuClosed: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.menuClosed) {
      this.setState({ menuClosed: false });
    } else {
      this.setState({ menuClosed: true });
    }
  }

  changeNames() {
    let menuOptionsClassName;

    if (this.state.menuClosed) {
      menuOptionsClassName = 'menuOptions left';

    } else {
      menuOptionsClassName = 'menuOptions right';

    }
    const names = {
      icon: 'iconHolder',
      menu: menuOptionsClassName

    };
    return names;
  }

  render() {
    const names = this.changeNames();

    return <div>
      <div className={names.icon} onClick={this.handleClick}>
        <i className="icon fas fa-bars"></i>
      </div>
      <div className={names.menu}>
        <div className="menuLeft">
          <a onClick={this.handleClick}><h2>MENU</h2></a>
          <a onClick={this.handleClick}><h3>FIRST</h3></a>
          <a onClick={this.handleClick}><h3>SECOND</h3></a>
          <a onClick={this.handleClick}><h3>THIRD</h3></a>
        </div>

      </div>
      <div className={names.modal}>
      </div>
    </div>;
  }
}

export default AppDrawer;
