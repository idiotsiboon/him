/* global screenGroupList */
var Group = React.createClass({
  render: function () {
    return (
      <li className="table-view-cell">
        <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
        {this.props.groupName}
      </li>
    );
  }
});
window.ScreenGroupList = React.createClass({
  handleNavFeeds: function () {
    this.props.setRoute("ScoreBoard");
  },
  handleHeadAddGroup: function () {
    this.props.setRoute("GroupDetails");
  },
  renderButtonNavFeeds: function () {
    return (
      <a onClick={this.handleNavFeeds} className="tab-item">
        <span className="icon icon-list"></span>
        <span className="tab-label">Feeds</span>
      </a>
    );
  },
  renderButtonHeadAddGroup: function () {
    return (
      <a onClick={this.handleHeadAddGroup} className="icon icon-plus pull-left"></a>
    );
  },
  renderListOfGroups: function () {
    return (
      <ul className="table-view">
        <Group groupName="abc" />
      </ul>
    );
  },
  renderNav: function () {
    return (
      <nav className="bar bar-tab">
        {this.renderButtonNavFeeds()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Groups</h1>
        {this.renderButtonHeadAddGroup()}
      </header>
    );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
          {this.renderListOfGroups()}
        </div>
        {this.renderNav()}
      </div>
    );
  }
});
