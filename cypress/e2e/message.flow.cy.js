describe('Message Flow', () => {
  it('loads the latest message on visit', () => {
    // Arrange: Ensure the app is running and seeded with expected message
    const expectedMessage = 'Hello from backend';

    // Act: Visit the homepage
    cy.visit('/');

    // Assert: Latest message appears
    cy.contains(expectedMessage).should('exist');
  });
});

describe('Counter Feature', () => {
  it('displays the initial counter', () => {
    // Arrange: Start with a fresh page load
    const expectedInitialCount = 0;

    // Act: Initial count is shown correctly
    cy.visit('/');

    // Assert
    cy.contains(expectedInitialCount).should('exist');
  });

  it('increments the counter when button is clicked', () => {
    // Arrange: Define the expected count after two clicks
    const expectedCount = 'count is 2';

    // Act: Visit and click the counter button twice
    cy.visit('/');
    cy.get('button')
      .contains(/count is \d+/i)
      .click()
      .click();

    // Assert: Counte shows updated value
    cy.contains(expectedCount).should('exist');
  });
});
