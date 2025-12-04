export const FLAGS = {
  trend: 1,
  aoi: 2,
  ema: 4,
  psych: 8,
  rejection: 16,
  crejection: 32,
  hs: 64
};

export const SCORES = {
  trend: 10,
  aoi: 10,
  ema: 5,
  psych: 5,
  rejection: 10,
  crejection: 10,
  hs: 10
};

export const ENTRY_FLAGS = {
  engulf: 1,
  bos: 2,
};

export const ENTRY_SCORES = {
  engulf: 5,
  bos: 5,
};

// Udregner total score ud fra bitværdi
export function calculateTotal(binaryValue) {
  let total = 0;

  Object.entries(FLAGS).forEach(([key, flag]) => {
    if (binaryValue & flag) {
      total += SCORES[key];
    }
  });

  return total;
}

export function calculateEntryTotal(binaryValue) {
  let total = 0;

  Object.entries(ENTRY_FLAGS).forEach(([key, flag]) => {
    if (binaryValue & flag) {
      total += ENTRY_SCORES[key];
    }
  });

  return total;
}
