/**
 * End-to-end tests for Web3 Agent functionality
 */

describe('Web3 Intelligence Agent', () => {
  beforeEach(() => {
    // Visit the web3-agent page
    cy.visit('/web3-agent');
  });

  describe('Page Load and UI', () => {
    it('should load the web3-agent page successfully', () => {
      cy.contains('Web3 Intelligence Agent').should('be.visible');
      cy.contains('Ask questions about blockchain data powered by AI').should('be.visible');
    });

    it('should display query suggestion cards', () => {
      cy.contains('Latest Block').should('be.visible');
      cy.contains('Token Holders').should('be.visible');
      cy.contains('Analyze Wallet').should('be.visible');
      cy.contains('Token Analysis').should('be.visible');
    });

    it('should toggle sidebar visibility', () => {
      cy.contains('MessageSquare').parent().click();
      cy.get('aside').should('be.visible');
    });

    it('should display chain badge', () => {
      cy.contains('Ethereum').should('be.visible');
    });
  });

  describe('Query Suggestions', () => {
    it('should display all 12 query suggestion cards', () => {
      cy.contains('Latest Block').should('be.visible');
      cy.contains('Token Holders').should('be.visible');
      cy.contains('Full Account Analysis').should('be.visible');
      cy.contains('Token Concentration').should('be.visible');
      cy.contains('Transaction Analysis').should('be.visible');
      cy.contains('Transaction Flow').should('be.visible');
      cy.contains('Block Information').should('be.visible');
      cy.contains('NFT Holdings').should('be.visible');
      cy.contains('Chain of Custody').should('be.visible');
      cy.contains('DeFi Analysis').should('be.visible');
      cy.contains('Token Transfers').should('be.visible');
      cy.contains('Network Status').should('be.visible');
    });
  });

  describe('Message Input and Submission', () => {
    it('should allow typing and submitting a message', () => {
      cy.get('input[type="text"]').type('What is the latest block on Ethereum?');
      cy.get('button[type="submit"]').click();
      
      // Should show user message
      cy.contains('What is the latest block on Ethereum?').should('be.visible');
    });

    it('should show loading state while streaming', () => {
      cy.get('input[type="text"]').type('Show latest block');
      cy.get('button[type="submit"]').click();
      
      // Should show loading/thinking indicator
      cy.contains('Analyzing blockchain data').should('be.visible');
    });

    it('should display AI response after completion', () => {
      cy.get('input[type="text"]').type('What is the latest block?');
      cy.get('button[type="submit"]').click();
      
      // Wait for response
      cy.wait(10000); // Give time for API call
      cy.contains('🤖 AI').should('be.visible');
    });
  });

  describe('Chain Selection', () => {
    it('should display chain selector', () => {
      // Just verify the page loads with chain support
      cy.contains('Ethereum').should('be.visible');
    });
  });

  describe('Error Handling', () => {
    it('should display error message for invalid query', () => {
      cy.intercept('POST', '/api/web3-agent', { statusCode: 500, body: { error: 'Test error' } });
      cy.get('input[type="text"]').type('invalid query');
      cy.get('button[type="submit"]').click();
      cy.contains('error', { matchCase: false }).should('be.visible');
    });

    it('should have retry button on error', () => {
      cy.intercept('POST', '/api/web3-agent', { statusCode: 500 });
      cy.get('input[type="text"]').type('test');
      cy.get('button[type="submit"]').click();
      cy.contains('Retry').should('be.visible');
    });
  });

  describe('Chat History', () => {
    it('should show sidebar when toggled', () => {
      cy.get('button').contains('MessageSquare').parent().click();
      cy.get('aside').should('exist');
    });
  });
});

describe('Web3 Agent Query Types', () => {
  beforeEach(() => {
    cy.visit('/web3-agent');
  });

  it('should handle transaction hash queries', () => {
    const txHash = '0x' + '0'.repeat(64);
    cy.get('input[type="text"]').type(`Analyze transaction ${txHash}`);
    cy.get('button[type="submit"]').click();
    cy.contains(txHash).should('be.visible');
  });

  it('should handle ENS name resolution', () => {
    cy.get('input[type="text"]').type('Analyze vitalik.eth');
    cy.get('button[type="submit"]').click();
    cy.contains('ENS').should('be.visible');
  });

  it('should handle token holder queries', () => {
    cy.get('input[type="text"]').type('Show top 10 USDC holders');
    cy.get('button[type="submit"]').click();
    cy.contains('holders').should('be.visible');
  });

  it('should handle block queries', () => {
    cy.get('input[type="text"]').type('What is block 19000000');
    cy.get('button[type="submit"]').click();
    cy.contains('block').should('be.visible');
  });
});

