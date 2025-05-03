describe('Add New Flashcard Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
      cy.get('#cardSetPage').click();
  
      // إنشاء Set جديد باسم "Frontend Basics"
      cy.get('[data-cy="toggle_form"]').click(); // فتح الفورم الخاص بالـ Set
      cy.get('#titleInput').type('Frontend Basics');
      cy.get('input[type="submit"]').click();
  
      // ننتظر لحد ما يظهر الـ Set ونتأكد منه
      cy.contains('Frontend Basics', { timeout: 6000 }).should('exist').click();
  
      // نظهر الفورم الخاص بالكروت
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"]').should('be.visible');
    });
  
    it('should add a new card when inputs are valid (happy path)', () => {
      cy.get('#termInput').type('HTML');
      cy.get('#descriptionInput').type('Structure of web pages');
      cy.get('input[type="submit"]').click();
  
      cy.contains('HTML').should('exist');
      cy.contains('Structure of web pages').should('exist');
    });
  
    it('should show error when inputs are empty (unhappy path)', () => {
      cy.get('#termInput').clear();
      cy.get('#descriptionInput').clear();
      cy.get('input[type="submit"]').click();
  
      // عدل الرسالة حسب اللي ظاهر فعليًا عندك
      cy.contains('TERM AND DESCRIPTION CANNOT BE EMPTY').should('exist');
    });
  });
  