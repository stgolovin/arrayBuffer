export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      if (!this.buffer) {
        throw new Error('ArrayBuffer is not loaded. Call load() first.');
      }
  
      const bufferView = new Uint16Array(this.buffer);
      let result = '';
      for (let i = 0; i < bufferView.length; i++) {
        result += String.fromCharCode(bufferView[i]);
      }
  
      return result;
    }
  }
  