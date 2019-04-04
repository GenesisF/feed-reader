/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This is our first test it tests to make sure that the allFeeds variable has been defined and that it is not
        empty.
         */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This for loop go thru each feed and ensure that the URL is defined and is not empty*/
        it('urls are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined and that the name is not empty.
         */
    });
        it('names are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name.length).not.toBe(0);
            }
        });

    /* New test suite "The menu" */
        describe('The menu', function() {

    
        /* Write a test that ensures the menu element is
         * hidden by default.*/
        it('menu is hidden', function(){
           expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        
         /* test  ensures the menu changes visibility when the     menu icon is clicked.
          */
         it('working toggle when click event', function() {

            let menu = document.querySelector('a.menu-icon-link');
            menu.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
     
           /*
           "I tried to use this method too but the test always said that false has to be true and true false and I switched multiple times so I use the one is un coment instead"
           $('.menu-icon.link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true); */ 
         });
    });

         /* New test suite named "Initial Entries" */
        describe('Initial Entries', function() {

            
        /* Test ensures when the loadFeed function is called and completes its work, there is at least a single entry element within the feed container.
         */

         beforeEach(function(done) {
             loadFeed(1, done);
         });
        
         it('entries in feed container', function() {
             let feedContainer = document.querySelector('div.feed');
             let entries = feedContainer.querySelectorAll('article.entry');
             expect(entries.length).toBeGreaterThan(0);
             
         });
    });
    /* New test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* test ensures when a new feed is loaded by the loadFeed function that the content actually changes
         */

         let firstFeed, secondFeed;

         beforeEach(function(done){
             loadFeed(3, function() {
                 fisrtFeed = document.querySelector('div.feed').innerHTML;
                 loadFeed(2, function() {
                     secondFeed = document.querySelector('div.feed').innerHTML;
                     done();
                 });
             });
         });

         it('loads new feeds', function() {
             expect(firstFeed).not.toBe(secondFeed);
         });
    });
}());
