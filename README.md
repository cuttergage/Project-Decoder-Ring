# Project-Decoder-Ring

[X] All tests are passing in Qualified.

Caesar Shift
[X] It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
[X] It ignores capital letters. (For example, the results of A Message and a message should be the same.)
[X] Encoding handles shifts that go past the end of the alphabet. (Shifting "z" to the right by 3 should cause become "c".)
[X] It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.

Polybius Square
[X] When encoding, it translates the letters i and j to 42.
[X] When decoding, it translates 42 to (i/j).
[X] It ignores capital letters. (For example, the results of A Message and a message should be the same.)
[X] It maintains spaces in the message, before and after encoding or decoding.

Substitution Cipher
[X] It returns false if the given alphabet isn't exactly 26 characters long.
[X] It correctly translates the given phrase, based on the alphabet given to the function.
[X] It returns false if there are any duplicate characters in the given alphabet.
[X] It maintains spaces in the message, before and after encoding or decoding.
[X] It ignores capital letters. (For example, the results of A Message and a message should be the same.)
