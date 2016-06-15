var Contact = React.createClass({
  renderToggle: function () {
    return (
      <div className="toggle active">
        <div className="toggle-handle"></div>
      </div>
    );
  },
  render: function () {
    return (
      <li className="table-view-cell">
        <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
        {this.props.contactName}
        {this.renderToggle()}
      </li>
    );
  }
});


window.ScreenAddContact = React.createClass({
  renderMsgNoStudent: function () {
    return "";
  },
  renderStudent: function () {

  },
  renderStudentList: function () {
    // fetch fb friends
    return (
      <ul className="table-view">
        <Contact contactName="abc" />
      </ul>
    );
  },
  renderButtonNavFeeds: function () {
    return (
      <a className="tab-item">
        <span className="icon icon-list"></span>
        <span className="tab-label">Feeds</span>
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
  renderButtonAddMembers: function () {
    return <button className="btn btn-positive btn-block">Add Members</button>;
  },
  renderNav: function () {
    return (
      <nav className="bar bar-tab">
        {this.renderButtonNavGroupList()}
        {this.renderButtonNavFeeds()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Contacts</h1>
      </header>
    );
  },

  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
          {this.renderStudentList()}
        </div>
        {this.renderNav()}
      </div>
    );
  }
});
