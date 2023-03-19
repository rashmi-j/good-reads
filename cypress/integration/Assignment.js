import {Assignmentpage } from "../../cypress/pages/Assignmentpage";

describe("Signin tests", () => {

    beforeEach(() => {
        cy.viewport(1280,720)
        cy.visit("https://www.goodreads.com/");
    });


    const assignment = new Assignmentpage();
    let email = "rashu2978@gmail.com";
    let password = "password";

    it('Sigin in to goodreads', () => {
        assignment.verifyLogin(email,password);
        assignment.verifySearchBook();
        assignment.verifyWantToRead();
        assignment.verifyRemoveSelectedBook();
        assignment.verifySignOut();
    })

})