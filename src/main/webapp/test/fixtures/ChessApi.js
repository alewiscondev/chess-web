define(function() {
    'use strict';

    return {

        initialBoardState: {
            "currentPlayer" : "White",
            "inCheck" : false,
            "gameOver" : false,
            "positionToPieces" : {
                "a8" : {"owner" : "Black", "type" : "r"},
                "b8" : {"owner" : "Black", "type" : "n"},
                "c8" : {"owner" : "Black", "type" : "b"},
                "d8" : {"owner" : "Black", "type" : "q"},
                "e8" : {"owner" : "Black", "type" : "k"},
                "f8" : {"owner" : "Black", "type" : "b"},
                "g8" : {"owner" : "Black", "type" : "n"},
                "h8" : {"owner" : "Black", "type" : "r"},
                "a7" : {"owner" : "Black", "type" : "p"},
                "b7" : {"owner" : "Black", "type" : "p"},
                "c7" : {"owner" : "Black", "type" : "p"},
                "d7" : {"owner" : "Black", "type" : "p"},
                "e7" : {"owner" : "Black", "type" : "p"},
                "f7" : {"owner" : "Black", "type" : "p"},
                "g7" : {"owner" : "Black", "type" : "p"},
                "h7" : {"owner" : "Black", "type" : "p"},
                "a1" : {"owner" : "White", "type" : "r"},
                "b1" : {"owner" : "White", "type" : "n"},
                "c1" : {"owner" : "White", "type" : "b"},
                "d1" : {"owner" : "White", "type" : "q"},
                "e1" : {"owner" : "White", "type" : "k"},
                "f1" : {"owner" : "White", "type" : "b"},
                "g1" : {"owner" : "White", "type" : "n"},
                "h1" : {"owner" : "White", "type" : "r"},
                "a2" : {"owner" : "White", "type" : "p"},
                "b2" : {"owner" : "White", "type" : "p"},
                "c2" : {"owner" : "White", "type" : "p"},
                "d2" : {"owner" : "White", "type" : "p"},
                "e2" : {"owner" : "White", "type" : "p"},
                "f2" : {"owner" : "White", "type" : "p"},
                "g2" : {"owner" : "White", "type" : "p"},
                "h2" : {"owner" : "White", "type" : "p"}
            }
        },

        boardInCheckState: {
            "currentPlayer" : "Black",
            "inCheck" : true,
            "gameOver" : false,
            "positionToPieces" : {
                "a8" : {"owner" : "White", "type" : "q"},
                "h8" : {"owner" : "White", "type" : "k"},
                "a1" : {"owner" : "Black", "type" : "k"}
            }
        },

        boardInCheckmateState: {
            "currentPlayer" : "White",
            "inCheck" : true,
            "gameOver" : true,
            "positionToPieces" : {
                "a8" : {"owner" : "Black", "type" : "q"},
                "a2" : {"owner" : "Black", "type" : "q"},
                "h8" : {"owner" : "Black", "type" : "k"},
                "a1" : {"owner" : "White", "type" : "k"}
            }
        },

        boardAfterMove: {
            "currentPlayer" : "White",
            "inCheck" : false,
            "gameOver" : false,
            "positionToPieces" : {
                "a8" : {"owner" : "White", "type" : "q"},
                "h8" : {"owner" : "White", "type" : "k"},
                "b1" : {"owner" : "Black", "type" : "k"}
            }
        }

    };
});


