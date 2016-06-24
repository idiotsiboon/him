var Contact = React.createClass({
  renderButtonRemoveContact: function () {
    return <button className="btn btn-negative">X</button>;
  },
  renderScore: function () {
    return this.props.contactObj.score;
  },
  render: function () {
    return (
      <li className="table-view-cell">
        <img className="media-object pull-left" src="http://placehold.it/42x42" role="presentation"></img>
        {this.props.contactObj.contactName}--
        {this.renderScore()}
        {this.renderButtonRemoveContact()}
      </li>
    );
  }
});

window.ScreenScoreBoard = React.createClass({
  handleNavFeeds: function () {
    this.props.setRoute("FeedsAndCreatePost");
  },
  handleNavGroupDetails: function () {
    this.props.setRoute("GroupDetails");
  },
  handleNavAddContacts: function () {
    this.props.setRoute("AddContact");
  },
  renderContacts: function () {
    var contacts = [];
    var arrContacts = [];
    var i;
    var jsonContacts = this.props.getContacts();
    var jsonGroups = this.props.getGroups();
    var groupId = this.props.getGroupId();
    //  a temp fix
    for (i = 0; i < jsonGroups.length; i++) {
      if (jsonGroups[i].id === groupId) {
        contacts = jsonGroups[i].users;
      }
    }
    arrContacts = jsonContacts.map(
      function (o){
        if (contacts.indexOf(o.id) !== -1) {
          return <Contact contactObj={o} />;
        }
      }
    );
    return (
      <ul className="table-view">
        {arrContacts}
      </ul>
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
  renderButtonNavGroupDetails: function () {
    return (
      <a onClick={this.handleNavGroupDetails} className="tab-item">
        <span className="icon">?</span>
        <span className="tab-label">About</span>
      </a>
    );
  },
  renderButtonNavFeeds: function () {
    return (
      <a onClick={this.handleNavFeeds} className="tab-item">
        <span className="icon icon-list"></span>
        <span className="tab-label">Feeds</span>
      </a>
    );
  },
  renderNav: function () {
    return (
      <nav className="bar bar-tab">
        {this.renderButtonNavFeeds()}
        {this.renderButtonNavAddContacts()}
        {this.renderButtonNavGroupDetails()}
      </nav>
    );
  },
  renderHead: function () {
    return (
      <header className="bar bar-nav">
        <h1 className="title">Scores</h1>
      </header>
    );
  },
  render() {
    return (
      <div>
        {this.renderHead()}
        <div className="content">
        {this.renderContacts()}
        </div>
        {this.renderNav()}
      </div>
    );
  }

});
