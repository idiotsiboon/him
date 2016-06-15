var Contact = React.createClass({
  renderButtonRemoveContact: function () {
    return <button className="btn btn-negative">X</button>;
  },
  render: function () {
    return (
      <li className="table-view-cell">
        <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
        {this.props.contactName}
        {this.renderButtonRemoveContact()}
      </li>
    );
  }
});

window.ScreenScoreBoard = React.createClass({
  handleNavFeeds: function () {
    this.props.setRoute("FeedsAndCreatePost");
  },
  handleNavGroupDetails: function () {
    this.props.setRoute("GroupDetails");
  },
  renderContacts: function () {
    return (
      <ul className="table-view">
        <Contact contactName="abc" />
      </ul>
    );
  },
  renderButtonNavGroupDetails: function () {
    return (
      <a onClick={this.handleNavGroupDetails} className="tab-item">
        <span className="icon">?</span>
        <span className="tab-label">About</span>
      </a>
    );
  },
  renderButtonNavFeeds: function () {
    return (
      <a onClick={this.handleNavFeeds} className="tab-item">
        <span className="icon icon-list"></span>
        <span className="tab-label">Feeds</span>
      </a>
    );
  },
  renderNav: function () {
    return (
      <nav className="bar bar-tab">
        {this.renderButtonNavFeeds()}
        {this.renderButtonNavGroupDetails()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Scores</h1>
      </header>
    );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
        {this.renderContacts()}
        </div>
        {this.renderNav()}
      </div>
    );
  }

});
