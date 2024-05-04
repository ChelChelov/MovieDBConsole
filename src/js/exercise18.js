'use strict';

function isPangram(string) {
    let set = new Set(string.toLowerCase());
    set.delete(' ');
    return set.size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));