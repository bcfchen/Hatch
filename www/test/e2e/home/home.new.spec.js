var HomeNewPage = require('./home.new.page.js'),
    HomeTrendingPage = require('./home.trending.page.js'),
    IdeaPage = require('../idea/idea.page.js');

describe('Going to the home page', function() {
    var css,
        homeNewPage = new HomeNewPage(),
        homeTrendingPage = new HomeTrendingPage(),
        ideaPage = new IdeaPage();

    beforeEach(function() {
        browser.get('http://localhost:8100/#/tab/home/new');
    });

    describe('When I full swipe right first idea card', function() {
        it('Should increment first idea likes on trending page', function() {
            homeNewPage.firstIdeaLikes.getText().then(function(likesText) {
                var firstIdeaLikesCount = parseInt(likesText);
                homeNewPage.fullSwipeRightFirstIdeaCard();
                homeNewPage.clickTrendingTab();
                expect(homeTrendingPage.firstIdeaLikes.getText()).toMatch(firstIdeaLikesCount + 1);
            });
        });
    });

    describe('When I partial swipe right first idea card', function() {
        it('Should not increment first idea likes on trending page', function() {
            homeNewPage.firstIdeaLikes.getText().then(function(likesText) {
                var firstIdeaLikesCount = parseInt(likesText);
                homeNewPage.partialSwipeRightFirstIdeaCard();
                homeNewPage.clickTrendingTab();
                expect(homeTrendingPage.firstIdeaLikes.getText()).toMatch(firstIdeaLikesCount);
            });
        });
    });

    describe('When I full swipe left first idea card', function() {
        it('Should not increment first idea likes on trending page', function() {
            homeNewPage.firstIdeaLikes.getText().then(function(likesText) {
                var firstIdeaLikesCount = parseInt(likesText);
                homeNewPage.fullSwipeLeftFirstIdeaCard();
                homeNewPage.clickTrendingTab();
                expect(homeTrendingPage.firstIdeaLikes.getText()).toMatch(firstIdeaLikesCount);
            });
        });
    });

});