import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');

  str = String(str);  
  let rep = options.repeatTimes || 1;
  let sep = options.separator || '+';
  let add = options.addition === undefined ? '' : String(options.addition);
  let addSep = options.additionSeparator || '|';
  let addRep = options.additionRepeatTimes || 1;

  let newStr = (add + addSep).repeat(addRep - 1) + add;

  return (str + newStr + sep).repeat(rep - 1) + str + newStr;
}
