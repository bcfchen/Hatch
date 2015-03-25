var HomePage = require('../home/home.trending.page.js'),
    IdeaPage = require('./idea.page.js');

describe('Going to the home page', function() {
    var css,
        homePage = new HomePage(),
        ideaPage = new IdeaPage();

    beforeEach(function() {
        browser.get('http://localhost:8100/#/tab/home/trending');
        homePage.clickFirstIdeaImage();
        browser.waitForAngular();
    });

    describe('When I am on the Idea page', function() {
        it('Should take me to the Idea page url', function() {
            expect(browser.getCurrentUrl()).toMatch(homePage.ideaPath);
        });

        it('Should show idea name', function() {
            expect(ideaPage.ideaName.getInnerHtml()).toBeTruthy();
        });

        it('Should show author name', function() {
            expect(ideaPage.authorName.getInnerHtml()).toBeTruthy();
        });

        it('Should show idea likes', function() {
            expect(ideaPage.ideaLikes.getText()).toBeTruthy();
        });
    });

    describe('When I like the idea', function() {
        it('Should increment number of likes on Idea page', function() {
            ideaPage.ideaLikes.getText().then(function(response) {
                var firstIdeaLikesBefore = parseInt(response);
                ideaPage.likeIdea();
                expect(ideaPage.ideaLikes.getText()).toContain(firstIdeaLikesBefore + 1);
            });
        });

        it('Should increment number of likes on Home page', function() {
            ideaPage.ideaLikes.getText().then(function(response) {
                var firstIdeaLikesBefore = parseInt(response);
                ideaPage.likeIdea();
                ideaPage.clickHeaderTitle();
                browser.waitForAngular();
                expect(homePage.firstIdeaLikes.getText()).toMatch(firstIdeaLikesBefore + 1);
            });
        });
    });

    describe('When clicking on add comment icon', function() {
        it('Should open the comment dialog', function() {
            ideaPage.clickAddComment();
            browser.waitForAngular();
            expect(ideaPage.commentDialogTitle.getText()).toMatch(ideaPage.commentDialogTitle);
        });
    });

    describe('When entering a comment', function() {
        describe('When comment is empty', function() {
            it('Should deactivate save button', function() {
                ideaPage.clickAddComment();
                browser.waitForAngular();
                ideaPage.saveComment();
                expect(ideaPage.commentDialogTitle.getText()).toMatch(ideaPage.commentDialogTitle);
            });
        });
    });

    describe('When saving a comment', function() {
        it('Should add the comment to the list', function() {
            ideaPage.clickAddComment();
            var commentText = "test comment";
            ideaPage.enterComment(commentText);
            ideaPage.saveComment();
            expect(ideaPage.allComments.getAttribute('text')).toMatch(commentText);
        });
    });

    describe('When cancelling a comment', function() {
        it('Should not add the comment to the list', function() {
            ideaPage.clickAddComment();
            var commentText = "test comment";
            ideaPage.enterComment(commentText);
            ideaPage.cancelComment();
            expect(ideaPage.allComments.getAttribute('text')).toNotMatch(commentText);
        });
    });

});