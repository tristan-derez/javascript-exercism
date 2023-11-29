// @ts-check

// get the first letter
export const frontDoorResponse = (line) => line.slice(0, 1);

// capitalize the first letter and add the remainder to lower case
export const frontDoorPassword = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();

// get the last letter of a sentence
export const backDoorResponse = (line) => line.trim().slice(-1);

// add politeness to frontDoorPassword()
export const backDoorPassword = (word) => frontDoorPassword(word) + ", please";
