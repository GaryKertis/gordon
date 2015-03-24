describe("hello-protractor", function(){

    describe("index", function(){
        it("should display the correct title", function(){
           browser.get('/#');
            expect(browser.getTitle()).toBe('hello');
        });
    });

    describe("index", function(){
        it("should display search results", function(){
            element(by.model('query')).sendKeys('cats');
            browser.sleep(300);
            expect(element.all(by.repeater('video in videos')).count()).toEqual(5);
        });
    });

});