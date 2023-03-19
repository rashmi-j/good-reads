export class Assignmentpage {
    

    //locators required for login
    signIn = "//a[text()='Sign In']";
    signInEmail = '.authPortalSignInButton';
    emailField = '#ap_email';
    emailPwd = '#ap_password';
    signInSubmit = '#signInSubmit';

    //locators to search a specific book
    searchbarField = '.searchBox__input--navbar';
    searchQuery = '#search_query_main'; //this is for another search tab to have whatever we typed

    //locators for marking want to read and remoce from list
    wantToRead = "//div[starts-with(@id,'1_book')]/div[1]/form/button"; 
    myBookList = '#rightCol'; //this is book list existing in Mybooks
    myBooks = '.siteHeader__topLevelLink';
    removeBook = "//tbody[@id='booksBody']/tr[1]/td[@class='field actions']/div/div/a";

    //locators for logout
    avatar = '.dropdown--profileMenu';  
    signout = "(//a[text()='Sign out'])[1]";


    verifyLogin(email,password){
        cy.xpath(this.signIn)
        .click();
        cy.get(this.signInEmail)
        .contains('Sign in with email')
        .click();
        cy.get(this.emailField)
        .type(email)
        .should('have.value','rashu2978@gmail.com');
        cy.get(this.emailPwd)
        .type(password)
        cy.get(this.signInSubmit)
        .click();
        cy.url().should('eq','https://www.goodreads.com/');
    }

   
    verifySearchBook(){
        cy.get(this.searchbarField)
        .type("Wings of fire: An Autobiography{enter}")
        cy.get(this.searchQuery)
        .should('have.value','Wings of fire: An Autobiography');
    }

    
    verifyWantToRead(){
        cy.xpath(this.wantToRead).eq(0)
        .click();
        cy.get(this.myBooks).eq(1).click();
        cy.get(this.myBookList).should('have.class', 'last col');
    }

    verifyRemoveSelectedBook(){

        //handling alert of type confirm
        cy.on('window:confirm',function(confirmText){
            return true
        })
        cy.xpath(this.removeBook).click();
        cy.contains('Wings of Fire: An Autobiography was removed from your books.')
    }

    verifySignOut(){
        cy.wait(5000)
        cy.get(this.avatar).click({force:true});
        cy.xpath(this.signout).click({force:true});
        cy.url().should('eq','https://www.goodreads.com/');
    }
}