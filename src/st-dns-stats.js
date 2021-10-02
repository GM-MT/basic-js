import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  
  let dns = {};
  for(let item of domains) {
    let str = '.' + item.split('.').reverse().join('.');
    while (str !== '.') {
      if (dns[str]) dns[str]++;
      else dns[str] = 1;
      str = '.' + str.split('.').slice(1,-1).join('.');
    }
  }
  return dns
}
