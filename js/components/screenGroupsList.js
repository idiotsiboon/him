/* global screenGroupList */
var Group = React.createClass({
  getStrength: function () {
    // no of unread posts..for the time being no of users
    return this.props.groupObj.users.length;
  },
  handleSelectGroup: function () {
    this.props.setGroupId(this.props.groupObj.id);
    this.props.setRoute("FeedsAndCreatePost");
  },
  render: function () {
    return (
      <li className="table-view-cell">
        <a className="navigate-right" onClick={this.handleSelectGroup}>
          <span className="badge">{this.getStrength()}</span>
          <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
          {this.props.groupObj.groupName}
        </a>
      </li>
    );
  }
});

window.ScreenGroupList = React.createClass({
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
    var jsonGroups = this.props.getGroups();
    var setRoute = this.props.setRoute;
    var setGroupId = this.props.setGroupId;
    var arrGroups = jsonGroups.map(function (o) {
      return <Group groupObj={o} setRoute={setRoute} setGroupId={setGroupId} />;
    });
    return (
      <ul className="table-view">
        {arrGroups}
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
        // renderNav
      </div>
    );
  }
});
