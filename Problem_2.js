"use strict";

(
    function() {

        let scoreCounter = {
            integers: [],
            removedIntegers: [],
            score: 0,

            sumScore: function(removedItem) {
                return this.score += removedItem;
            },

            addItem: function() {
                if (this.integers.length > 0)
                    this.integers = [this.integers, ...arguments];

                else
                    this.integers = [...arguments];

            },

            removeItem: function(item) {
                let set = new Set([...this.integers]);
				
                if (set.has(item)) {
                    set.delete(item);
                    this.integers = [...set];
                    this.removedIntegers.push(item);
                    this.sumScore(item);
                }
            },


            display: function() {
                return `List of Integers : ${this.integers} \n Score : ${this.score} \n Removed Integers ${this.removedIntegers}`;
            }

        };


        scoreCounter.addItem(0, 0, 1, 2, 2, 2, 3, 4, 4);
        scoreCounter.removeItem(2);		
        scoreCounter.removeItem(4);	
        console.log(scoreCounter.display());

    })();