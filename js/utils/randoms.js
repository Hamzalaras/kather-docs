

export const randomSkip = length => Math.floor(Math.random() * length);

export const randomArrEle = arr => arr[randomSkip(arr.length)];