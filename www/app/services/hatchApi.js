(function () {
    "use strict";

    angular.module("app.services").factory("hatchApi", [hatchApi]);

    function hatchApi() {
        var currentUserId = 1;
        
        var authors = [{"id": 1, "name": "Beck", "title": "Android Dev"}, {"id": 2, "name": "Jenny", "title": "iOS Dev"}, {"id": 3, "name": "Jason", "title": "Web Dev"}, {"id": 4, "name": "Amit", "title": "Android Dev"}];
        
        var ideas = [{"id": 1, "idea": "Wine picker app", "likes": 45, "image": "img/wine.jpg", "authorId": 1, "author": "Beck", "authorTitle": "Android dev"}, {"id": 2, "idea": "Note taking iPhone app", "likes": 33, "image": "img/napkin.jpg", "authorId": 2, "author": "Jenny", "authorTitle": "iOS dev"}, {"id": 3, "idea": "Coffee shop ordering system", "likes": 20, "image": "img/coffee.png", "authorId": 3, "author": "Jason", "authorTitle": "iOS dev"}, {"id": 4, "idea": "Schedule organizer", "likes": 40, "image": "img/schedule.jpg", "authorId": 1, "author": "Beck", "authorTitle": "Android dev"},{"id": 5, "idea": "Photo app for food pictures", "likes": 25, "image": "img/0204151840.jpg", "authorId": 4, "author": "Amit", "authorTitle": "Android dev"}];

        var comments = [{"name": "Jenny", "ideaId": 1, "idea": "Wine picker", "comment": "Good job"},{"name": "Jason", "ideaId": 4, "idea":"Schedule organizer", "comment": "Could be better"}, {"name": "Beck", "ideaId": 5, "idea": "Photo app for food pics", "comment": "Great app!"}, {"name": "Beck", "ideaId": 1, "idea": "Wine picker", "comment": "Thanks guys!"}];
        
        var profile = {"name": "Beck Chen", "profileImage": "img/profile-stub.jpg", "title": "Android dev", "biography": "Android dev interested in projects"};

        var myIdeas = [{"id": 1, "idea": "Wine picker", "image": "img/wine.jpg", "likes": 30}, {"id": 4, "idea": "Schedule organizer", "image": "img/0204151501.jpg", "likes": 15}];

        var idea = {"name": "Wine picker", "likes": 30, "image": "img/wine.jpg", "author": "Beck", "authorTitle": "Android dev", "comments": [{"name": "Jenny", "comment": "Good job!"}, {"name": "Amit", "comment": "Interesting thought"}, {"name": "Jason", "comment": "Could be more unique"}]};

        function getCurrentUserId(){
            return currentUserId;
        }

        function getCurrentUser(){
            var currentUser = _.find(authors, function(author){
                return author.id == currentUserId;
            })
            return currentUser;
        }

        function getIdeas(){
            return ideas;
        }

        function getComments(ideaId){
            var ideaComments = _.filter(comments, function(comment){
                return comment.ideaId == ideaId;
            });

            return ideaComments;
        }

        function addComment(comment){
            comments.push(comment);
        }

        function getAllComments(){
            return comments;
        }

        function getProfile(){
            return profile;
        }

        function getMyIdeas(){
            var myIdeas = _.filter(ideas, function(idea){
                return idea.authorId == currentUserId;
            });
            return myIdeas;
        }

        function getIdea(ideaId){
            var idea = _.find(ideas, function(idea){
                return idea.id == ideaId;
            });
            return idea;
        }

        return {
            getIdeas: getIdeas,
            getComments: getComments,
            getAllComments: getAllComments,
            getProfile: getProfile,
            getMyIdeas: getMyIdeas,
            getIdea: getIdea,
            getCurrentUserId: getCurrentUserId,
            addComment: addComment,
            getCurrentUser: getCurrentUser
        };
    };
})();