import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  
  constructor(flag = true) {
    this.flag = flag;
  }
  encrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
      if (text == undefined || key == undefined) throw new Error('Incorrect arguments!');
      let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let pos = 0;
      let result = '';
      for (let i = 0; i < text.length; i++) {
          if (alf.includes(text.toUpperCase()[i])) {
              result += alf[((alf.indexOf(text.toUpperCase()[i]) + alf.indexOf(key.toUpperCase()[pos % key.length]) + 26) % 26)];
              console.log(pos,  result)
              pos++;
          } else {
              result += text[i];
          }
      }
      return this.flag ? result : result.split('').reverse().join('');

  }
  decrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
      if (text == undefined || key == undefined) throw new Error('Incorrect arguments!');
      let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let pos = 0;
      let result = '';
      for (let i = 0; i < text.length; i++) {
          if (alf.includes(text.toUpperCase()[i])) {
              result += alf[((alf.indexOf(text.toUpperCase()[i]) - alf.indexOf(key.toUpperCase()[pos % key.length]) + 26) % 26)];
              pos++;
          } else {
              result += text[i];
          }
      }
      return this.flag ? result : result.split('').reverse().join('');
  }

}
