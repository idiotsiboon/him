window.ScreenGroupDetails = React.createClass({
  handleNavScoreBoard: function () {
    this.props.setRoute("ScoreBoard");
  },
  handleNavGroupList: function () {
    this.props.setRoute("GroupList");
  },
  handleNavAddContacts: function () {
    this.props.setRoute("AddContact");
  },
  renderGroupName: function () {
    return "";
  },
  renderGroupRules: function () {
    return (
      <form>
        <textarea rows="5"></textarea>
        <a className="btn btn-positive btn-block">Finish</a>
      </form>
    );
  },
  renderButtonNavAddContacts: function () {
    return (
      <a onClick={this.handleNavAddContacts} className="tab-item">
        <span className="icon icon-person"></span>
        <span className="tab-label">AddMembers</span>
      </a>
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
        {this.renderButtonNavAddContacts()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">__Group Name__</h1>
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
