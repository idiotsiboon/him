window.ScreenGroupDetails = React.createClass({
  handleNavScoreBoard: function () {
    this.props.setRoute("ScoreBoard");
  },
  handleNavGroupList: function () {
    this.props.setRoute("GroupList");
  },
  renderGroupName: function () {
    var groupId = this.props.groupId;
    var name;
    var i;
    var groupJson = this.props.getGroups();
    for (i = 0; i < groupJson.length; i++) {
      if (groupJson[i].id === groupId) {
        name = groupJson[i].groupName;
      }
    }
    return name;
  },
  renderGroupRules: function () {
    var groupId = this.props.groupId;
    var rules;
    var i;
    var groupJson = this.props.getGroups();
    for (i = 0; i < groupJson.length; i++) {
      if (groupJson[i].id === groupId) {
        rules = groupJson[i].groupRules;
      }
    }
    return (
      <form>
        <textarea rows="5">{rules}</textarea>
        <a className="btn btn-positive btn-block">Finish</a>
      </form>
    );
  },
  renderButtonNavScoreBoard: function () {
    return (
      <a onClick={this.handleNavScoreBoard} className="tab-item">
        <span className="icon icon-star"></span>
        <span className="tab-label">Scores</span>
      </a>
    );
  },
  renderButtonNavGroupList: function () {
    return (
      <a onClick={this.handleNavGroupList} className="tab-item">
        <span className="icon icon-bars"></span>
        <span className="tab-label">Groups</span>
      </a>
    );
  },
  renderNav: function () {
    return (
      <nav className="bar bar-tab">
        {this.renderButtonNavGroupList()}
        {this.renderButtonNavScoreBoard()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">{this.renderGroupName()}</h1>
      </header>
    );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
          {this.renderGroupRules()}
        </div>
        {this.renderNav()}
      </div>
    );
  }
});
