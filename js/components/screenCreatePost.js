window.ScreenCreatePost = React.createClass({
  getInitialState: function () {
    return { content: "" };
  },
  handleContentChange: function (e) {
    this.setState({ content: e.target.value });
  },
  handleSubmitPost: function () {
    var post = {
      id: Math.random(),
      groupId: this.props.groupId,
      contactId: "576265f4f92109d1d05b517b",
      content: this.state.content
    };
    this.props.createPost(post);
    this.props.setRoute("FeedsAndCreatePost");
  },
  handleCancelPost: function () {
    this.props.setRoute("FeedsAndCreatePost");
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Home Screen</h1>
      </header>
    );
  },
  renderCreatePost: function () {
    return (
      <div>
        <textarea
          rows="5"
          placeholder="Start Here"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <a
          className="btn btn-block btn-outlined btn-positive"
          onClick={this.handleSubmitPost}
        >Post</a>
        <a
          className="btn btn-block btn-outlined btn-negative"
          onClick={this.handleCancelPost}
        >Cancel</a>
      </div>
      );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
        {this.renderCreatePost()}
        </div>
      </div>
    );
  }
});
