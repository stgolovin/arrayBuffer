import ArrayBufferConverter from '../app';

describe('ArrayBufferConverter', () => {
  it('should load and convert ArrayBuffer to string', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toBe(expected);
  });

  it('should throw an error when trying to convert without loading', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    expect(() => arrayBufferConverter.toString()).toThrow('ArrayBuffer is not loaded. Call load() first.');
  });   
});

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
