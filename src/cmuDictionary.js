import { dictionary } from './data.js';

export function cmuDictionaryLookup(word) {
    return dictionary[word.toUpperCase()];
}