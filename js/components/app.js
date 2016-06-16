/* global
ScreenScoreBoard
ScreenAddContact
ScreenGroupDetails
ScreenGroupList
ScreenFeedsAndCreatePost
*/

window.App = React.createClass({
  getInitialState: function () {
    return {
      route: "GroupDetails"
    };
  },
  setRoute(r) {
    this.setState({ route: r });
  },
  gettContacts: function () {
    return this.props.jsonContacts;
  },
  getGroups: function () {
    return this.props.jsonGroups;
  },
  render() {
    const route = this.state.route;

    switch (route) {

      case "ScoreBoard":
        return (<ScreenScoreBoard getContacts={this.getContacts} setRoute={this.setRoute} />);
      case "AddContact":
        return (<ScreenAddContact setRoute={this.setRoute} />);
      case "GroupDetails":
        return (<ScreenGroupDetails setRoute={this.setRoute} />);
      case "GroupList" :
        return (<ScreenGroupList getGroups={this.getGroups} setRoute={this.setRoute} />);
      case "FeedsAndCreatePost" :
        return (<ScreenFeedsAndCreatePost setRoute={this.setRoute} />);
      default:
        return ("No");

    }
  }

});
