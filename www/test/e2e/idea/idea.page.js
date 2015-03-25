module.exports = function(){
  /* string constants */
  this.appTitle = 'hatch';
  this.ideaPath = '/tab/idea';
  this.profilePath = '/tab/profile';
  this.commentsPath = '/tab/alerts';
  this.homePath = '/tab/home';
  this.trendingTabTitle = 'Trending';
  this.newTabTitle = 'New';
  this.commentDialogTitle = 'Comment';

  /* page elements */
  this.ideaName = element(by.binding('vm.idea.idea'));
  this.authorName = element(by.binding('vm.idea.author'));
  this.ideaLikes = element(by.binding('vm.idea.likes'));
  this.addCommentIcon =  element(by.css('[nav-bar="active"] #add-comment'));
  this.commentArea = element(by.model('data.comment'));
  this.commentDialogTitle = element(by.css('.popup-title'));
  this.saveCommentButton = element(by.css('.button-positive'));
  this.cancelCommentButton = element(by.css('.button-default'));
  this.allComments = element.all(by.repeater('comment in vm.comments'));

  this.header = element(by.css('#headerTitle'));
  this.commentsIcon = element(by.css('.comments-link'));
  this.profileIcon = element(by.css('.profile-link'));

  /* action methods */
  this.likeIdea = function(){
  	element(by.css('.likeImage')).click();
  }

  this.clickHeaderTitle = function(){
    this.header.click();
  }

  this.clickCommentsIcon = function(){
  	this.commentsIcon.click();
  }

  this.clickProfileIcon = function(){
  	this.profileIcon.click();
  }

  this.clickAddComment = function(){
    this.addCommentIcon.click();
  }

  this.enterComment = function(commentText){
    this.commentArea.sendKeys(commentText);
  }

  this.saveComment = function(){
    this.saveCommentButton.click();
  }

  this.cancelComment = function(){
    this.cancelCommentButton.click();
  }

}
