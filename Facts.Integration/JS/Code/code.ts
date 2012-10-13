﻿class StringPlus {
    vowels: string;
    constructor (public content: string){
        this.vowels = "aeiou";
    }

    countVowels() {
        var count = 0;
        for (var i = 0; i < this.content.length; i++) {
            if (this.vowels.indexOf(this.content[i]) > -1) {
                count++;
            }
        }
        return count;
    }
}


var mathLib = {
    add5: function(a: number) {
        return a + 5;
    },
    mult5: function(a: number) {
        return a * 5;
    }
};

var errorThing = {
    thing: ["thing" + someUndefinedVariable]
};

function throwError() {
    throw "CODE ERROR";
}