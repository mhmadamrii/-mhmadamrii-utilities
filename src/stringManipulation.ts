// stringManipulation.ts
export const removePlusSign = (input: string): string => {
  return input.startsWith("+") ? input.slice(1) : input;
};

export const maskPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.length < 4) {
    throw new Error("Phone number is too short to mask.");
  }
  const start = phoneNumber.slice(0, 2);
  const end = phoneNumber.slice(-2);
  const masked = "*".repeat(phoneNumber.length - 4);
  return `${start}${masked}${end}`;
};
