import {Assignmentpage } from "../../cypress/pages/Assignmentpage";

describe("Signin tests", () => {

    beforeEach(() => {
        cy.viewport(1280,720)
    });


    const assignment = new Assignmentpage();
    let email = "rashu2978@gmail.com";
    let password = "password";

    it('Sigin in to goodreads', () => {
        cy.visit("https://www.goodreads.com/");
        // cy.xpath(login.signin)
        // .click();
        assignment.verifyLogin(email,password);
        assignment.verifySearchBook();
        assignment.verifyWantToRead();
        assignment.verifyRemoveSelectedBook();
        assignment.verifySignOut();
    })

})