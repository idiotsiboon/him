var Student = React.createClass({});

var ScreenScoreBoard = React.createClass({
  renderStudents: function () {
    return "";
  },
  renderButtonRemoveStudent: function () {
    return "";
  },
  renderButtonNavGroupDetails: function () {
    return "";
  },
  renderButtonNavFeeds: function () {
    return "";
  },
  renderNav: function () {
    return "";
  },
  renderHead: function () {
    return "";
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
