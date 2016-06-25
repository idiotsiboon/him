var Post = React.createClass({
  render: function () {
    return (
      <li className="table-view-cell">
        <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
        {this.props.postObj.content}
      </li>
    );
  }
});

window.ScreenFeedsAndCreatePost = React.createClass({
  handleNavScoreBoard: function () {
    this.props.setRoute("ScoreBoard");
  },
  handleNavGroupList: function () {
    this.props.setRoute("GroupList");
  },
  handleNavCreatePost: function () {
    this.props.setRoute("CreatePost");
  },
  renderFeeds: function () {
    var jsonPosts = this.props.getPosts();
    var groupId = this.props.groupId;
    var arrPosts = jsonPosts.map(function (o) {
      if (o.groupId === groupId) {
        return <Post postObj={o} />;
      }
    });
    return (
      <ul className="table-view">
        {arrPosts}
      </ul>
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
  renderButtonNavCreatePost: function () {
    return (
      <a onClick={this.handleNavCreatePost} className="tab-item">
        <span className="icon icon-compose"></span>
        <span className="tab-label">Post</span>
      </a>
    );
  },
  renderNav: function () {
      return (
        <nav className="bar bar-tab">
          {this.renderButtonNavGroupList()}
          {this.renderButtonNavScoreBoard()}
          {this.renderButtonNavCreatePost()}
        </nav>
      );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Home Screen</h1>
      </header>
    );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
          {this.renderFeeds()}
        </div>
        {this.renderNav()}
      </div>
    );
  }
});
