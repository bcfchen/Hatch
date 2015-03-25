var homeTrendingPage = require('./home.new.page.js'),
    HomeTrendingPage = require('./home.trending.page.js'),
    IdeaPage = require('../idea/idea.page.js');

describe('Going to the home page', function() {
    var css,
        homeTrendingPage = new HomeTrendingPage(),
        ideaPage = new IdeaPage();

    beforeEach(function() {
        browser.get('http://localhost:8100/#/tab/home/trending');
    });

    describe('When I am on the home page', function() {
        it('Should show the app title', function() {
            var header = homeTrendingPage.header;
            expect(header.getText()).toMatch(homeTrendingPage.appTitle);
        });

        it('Should show submitted ideas', function() {
            var ideas = homeTrendingPage.ideas;
            expect(ideas.count()).toBeGreaterThan(0);
        });

        it('Should show Trending and New tabs', function() {
            expect(homeTrendingPage.tabs.getText()).toMatch(homeTrendingPage.trendingTabTitle);
            expect(homeTrendingPage.tabs.getText()).toMatch(homeTrendingPage.newTabTitle);
        });
    });

    describe('When I click on first idea image', function() {
        it('Should navigate to Idea page', function() {
            homeTrendingPage.clickFirstIdeaImage();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(homeTrendingPage.ideaPath);
        });
    });

    describe('When I like the first idea', function() {
        it('homeTrendingPage increment number of likes on Home page', function() {
            homeTrendingPage.firstIdeaLikes.getText().then(function(response) {
                var firstIdeaLikesBefore = parseInt(response);
                homeTrendingPage.likeFirstIdea();
                expect(homeTrendingPage.firstIdeaLikes.getText()).toMatch(firstIdeaLikesBefore + 1);
            });
        });

        it('Should increment number of likes on Idea page', function() {
            homeTrendingPage.firstIdeaLikes.getText().then(function(response) {
                var firstIdeaLikesBefore = parseInt(response);
                homeTrendingPage.likeFirstIdea();
                homeTrendingPage.clickFirstIdeaImage();
                expect(ideaPage.ideaLikes.getText()).toMatch(firstIdeaLikesBefore + 1);
            });
        });
    });

    describe('When I click on New tab', function() {
        it('Should navigate to New tab', function() {
            homeTrendingPage.clickCommentsIcon();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(homeTrendingPage.commentsPath);
        });
    });

    describe('When I click on comments icon', function() {
        it('Should navigate to Comments page', function() {
            homeTrendingPage.clickCommentsIcon();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(homeTrendingPage.commentsPath);
        });
    });

    describe('When I click on profile icon', function() {
        it('Should navigate to Profile page', function() {
            homeTrendingPage.clickProfileIcon();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(homeTrendingPage.profilePath);
        });
    });

});