module.exports = function(){
  /* string constants */
  this.appTitle = 'hatchasdf';
  this.ideaPath = '/tab/idea';
  this.profilePath = '/tab/profile';
  this.commentsPath = '/tab/alerts';
  this.trendingTabTitle = 'Trending';
  this.newTabTitle = 'New';

  /* page elements */
  this.header = element(by.css('.headerTitle'));
  this.ideas = element.all(by.repeater('idea in list'));
  this.firstIdea = element.all(by.repeater('idea in list')).first();
  this.firstIdeaLikes = element.all(by.repeater('idea in list').column('likes')).first();
  this.tabs = element.all(by.css('.tab-title'));
  this.commentsIcon = element(by.css('.comments-link'));
  this.profileIcon = element(by.css('.profile-link'));

  /* action methods */
  this.likeFirstIdea = function(){
  	this.firstIdea.element(by.css('.heartImage')).click();
  }

  this.clickCommentsIcon = function(){
  	this.commentsIcon.click();
  }

  this.clickProfileIcon = function(){
  	this.profileIcon.click();
  }

  this.clickFirstIdeaImage = function(){
  	this.firstIdea.element(by.css('.ideaImage')).click();
  }
}
