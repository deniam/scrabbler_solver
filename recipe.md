Regarding specification, it need to create 2 Classes with a few methods:
* 1st Class will have one method to take a "word" as an argument and return the score. This method will request methods from 2nd class.
* 2nd Class will take word from the 1st Class. One method will iterate every "word" by letters, second method will transform letters into the points by algorythm.

Class Scrabbler 
* Constructor
    this.word = word
    this.schema = {"A, E, I, O, U, L, N, R, S, T": 1, "D, G": 2, "B, C, M, P": 3, "F, H, V, W, Y": 4, "K": 5, "J, X": 8, "Q, Z": 10}

Class ScrabblerSolver
