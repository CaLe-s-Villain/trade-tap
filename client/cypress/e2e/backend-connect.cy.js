describe('Backend Integration Test', () => {
  it('displays messages from the backend', () => {
    cy.visit('/');

    // Adjust this selector if needed based on your component
    cy.contains('Hello from backend').should('exist');
  });
});
