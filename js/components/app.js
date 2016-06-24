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
      route: "GroupList",
      groupId: "abc"
    };
  },
  setRoute(r) {
    this.setState({ route: r });
  },
  setGroupId(i) {
    this.setState({ groupId: i });
  },
  getGroupId() {
    return this.state.groupId;
  },
  getContacts: function () {
    return this.props.jsonContacts;
  },
  getGroups: function () {
    return this.props.jsonGroups;
  },
  getPosts: function () {
    return this.props.jsonPosts;
  },
  render() {
    const route = this.state.route;

    switch (route) {

      case "ScoreBoard":
        return (
          <ScreenScoreBoard
            getContacts={this.getContacts}
            getGroups={this.getGroups}
            setRoute={this.setRoute}
            getGroupId={this.getGroupId}
          />
        );
      case "AddContact":
        return (<ScreenAddContact getContacts={this.getContacts} setRoute={this.setRoute} />);
      case "GroupDetails":
        return (
          <ScreenGroupDetails
            setRoute={this.setRoute}
            getGroupId={this.getGroupId}
            getGroups={this.getGroups}
          />
        );
      case "GroupList" :
        return (
          <ScreenGroupList
            getGroups={this.getGroups}
            setRoute={this.setRoute}
            setGroupId={this.setGroupId}
          />
          );
      case "FeedsAndCreatePost" :
        return (
          <ScreenFeedsAndCreatePost
            getPosts={this.getPosts}
            getGroupId={this.getGroupId}
            setRoute={this.setRoute}
          />
        );
      default:
        return ("No");

    }
  }

});
