import ContactClass from './contact';

describe('Contact class listing 2.3 tests', () => {
  let contact: ContactClass = null;

  beforeEach(() => {
    contact = new ContactClass();
  });

  it('should have a valid constuctor', () => {
    expect(contact).not.toBeNull();
  });

  afterEach(() => {
    contact = null;
  });
});
