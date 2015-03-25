module.exports = function() {
    /* string constants */
    this.appTitle = 'hatch';
    this.ideaPath = '/tab/idea';
    this.profilePath = '/tab/profile';
    this.commentsPath = '/tab/alerts';
    this.trendingTabTitle = 'Trending';
    this.newTabTitle = 'New';

    /* page elements */
    this.ideas = element.all(by.repeater('idea in list'));
    this.tabs = element.all(by.css('.tab-title'));
    this.ideaCards = element.all(by.repeater('idea in vm.cards'));
    this.firstIdeaCard = this.ideaCards.first();
    this.firstIdeaLikes = element.all(by.repeater('idea in vm.cards').column('likes')).first();
    this.trendingTab = element.all(by.css('.tab-item')).first();

    /* action methods */
    this.fullSwipeRightFirstIdeaCard = function() {
        browser.actions().dragAndDrop(this.firstIdeaCard.getWebElement(), {
                x: 400,
                y: -150
            })
            .perform();
    }

    this.fullSwipeLeftFirstIdeaCard = function() {
        browser.actions().dragAndDrop(this.firstIdeaCard.getWebElement(), {
                x: -400,
                y: -150
            })
            .perform();
    }

    this.partialSwipeRightFirstIdeaCard = function() {
        browser.actions().dragAndDrop(this.firstIdeaCard.getWebElement(), {
                x: 200,
                y: -100
            })
            .perform();
    }

    this.clickTrendingTab = function() {
        this.trendingTab.click();
    }

}