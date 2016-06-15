/* global screenGroupList */

var ScreenGroupList = React.createClass({
  renderButtonNavFeeds: function () {
    return "";
  },
  renderButtonNavAddGroup: function () {
    return "";
  },
  renderListOfGroups: function () {
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
