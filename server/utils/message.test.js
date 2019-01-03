const expect = require('expect');
let { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Ebran';
    let text = 'I am texting the message file!';
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate current location object', () => {
    let lat = 23;
    let lon = 34;
    let url = `https://www.google.com/maps?q=${lat},${lon}`;
    let message = generateLocationMessage('Test', lat, lon);
    
    expect(message.from).toBe('Test');
    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe(url);
    expect(message).toMatchObject({
      from: 'Test',
      url
    })
  });
});
