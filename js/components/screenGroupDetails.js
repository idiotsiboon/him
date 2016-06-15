window.ScreenGroupDetails = React.createClass({
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
  renderButtonNavAddMembers: function () {
    return (
      <a className="tab-item">
        <span className="icon icon-person"></span>
        <span className="tab-label">AddMembers</span>
      </a>
    );
  },
  renderButtonNavScoreBoard: function () {
    return (
      <a className="tab-item">
        <span className="icon icon-star"></span>
        <span className="tab-label">Scores</span>
      </a>
    );
  },
  renderButtonNavGroupList: function () {
    return (
      <a className="tab-item">
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
        {this.renderButtonNavAddMembers()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Group Name</h1>
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
