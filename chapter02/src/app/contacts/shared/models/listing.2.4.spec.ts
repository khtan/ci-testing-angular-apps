import ContactClass from './contact';

describe('ContactClass listing 2.4 tests', () => {
  let contact: ContactClass = null;

  beforeEach(() => {
    contact = new ContactClass();
  });

  it('should have a valid constructor', () => {
    expect(contact).not.toBeNull();
  });

  it('should set name correctly through constructor', () => {
    contact = new ContactClass('Liz');
    expect(contact.name).toEqual('Liz');
  });

  afterEach(() => {
    contact = null;
  });
});
