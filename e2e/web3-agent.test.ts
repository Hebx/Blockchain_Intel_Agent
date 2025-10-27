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
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="chat-sidebar"]').should('be.visible');
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="chat-sidebar"]').should('not.be.visible');
    });

    it('should display chain badge', () => {
      cy.get('[data-testid="chain-badge"]').should('contain', 'Ethereum');
    });
  });

  describe('Query Suggestions', () => {
    it('should allow clicking on Latest Block query', () => {
      cy.contains('Latest Block').click();
      cy.get('input[type="text"]').should('have.value', "What's the latest block on Ethereum?");
    });

    it('should allow clicking on Token Holders query', () => {
      cy.contains('Token Holders').click();
      cy.get('input[type="text"]').should('have.value', 'Show me the top 10 holders of USDC');
    });

    it('should allow clicking on Analyze Wallet query', () => {
      cy.contains('Analyze Wallet').click();
      cy.get('input[type="text"]').should('contain.value', 'Analyze wallet:');
    });

    it('should allow clicking on Token Analysis query', () => {
      cy.contains('Token Analysis').click();
      cy.get('input[type="text"]').should('contain.value', 'Show top 10 holders of');
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
    it('should change chain from Ethereum to Base', () => {
      cy.get('[data-testid="chain-selector"]').click();
      cy.contains('Base').click();
      cy.get('[data-testid="chain-badge"]').should('contain', 'Base');
    });

    it('should change chain to Optimism', () => {
      cy.get('[data-testid="chain-selector"]').click();
      cy.contains('Optimism').click();
      cy.get('[data-testid="chain-badge"]').should('contain', 'Optimism');
    });

    it('should change chain to Polygon', () => {
      cy.get('[data-testid="chain-selector"]').click();
      cy.contains('Polygon').click();
      cy.get('[data-testid="chain-badge"]').should('contain', 'Polygon');
    });

    it('should change chain to Arbitrum', () => {
      cy.get('[data-testid="chain-selector"]').click();
      cy.contains('Arbitrum').click();
      cy.get('[data-testid="chain-badge"]').should('contain', 'Arbitrum');
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
    it('should create new chat on new chat button click', () => {
      cy.get('[data-testid="new-chat-button"]').click();
      cy.url().should('include', '/web3-agent');
    });

    it('should show chat history in sidebar', () => {
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="chat-sidebar"]').should('be.visible');
      cy.get('[data-testid="chat-list"]').should('exist');
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

