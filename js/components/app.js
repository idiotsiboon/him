/* global
ScreenScoreBoard
ScreenAddContact
ScreenGroupDetails
ScreenGroupList
ScreenFeedsAndCreatePost
ScreenCreatePost
*/

window.App = React.createClass({
  getInitialState: function () {
    return {
      route: "GroupList",
      groupId: "abc",
      posts: this.props.jsonPosts
    };
  },
  setRoute(r) {
    this.setState({ route: r });
  },
  setGroupId(i) {
    this.setState({ groupId: i });
  },
  getContacts: function () {
    return this.props.jsonContacts;
  },
  getGroups: function () {
    return this.props.jsonGroups;
  },
  getPosts: function () {
    return this.state.posts;
  },
  createPost: function (postObj) {
    this.setState({
      posts: this.state.posts.concat(postObj)
    });
    // console.log(postObj)
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
            groupId={this.state.groupId}
          />
        );
      case "AddContact":
        return (<ScreenAddContact getContacts={this.getContacts} setRoute={this.setRoute} />);
      case "GroupDetails":
        return (
          <ScreenGroupDetails
            setRoute={this.setRoute}
            groupId={this.state.groupId}
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
            groupId={this.state.groupId}
            setRoute={this.setRoute}
          />
        );
      case "CreatePost":
        return (
          <ScreenCreatePost
            groupId={this.state.groupId}
            setRoute={this.setRoute}
            createPost={this.createPost}
          />
        );

      default:
        return ("No");

    }
  }

});
