// @ts-check

export const expectedMinutesInOven = 40;
const preparationMinutesPerLayer = 2;

// Determines the number of minutes the lasagna still needs to remain in the oven to be properly prepared.
export const remainingMinutesInOven = (actualMinutesInOven) => expectedMinutesInOven - actualMinutesInOven;

// Given a number of layers, determines the total preparation time.
export const preparationTimeInMinutes = (numberOfLayers) => numberOfLayers * preparationMinutesPerLayer;

// Calculates the total working time.
export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) =>
  preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
