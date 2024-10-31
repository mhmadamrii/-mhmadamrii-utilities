import {removePlusSign, maskPhoneNumber} from "../src/stringManipulation";

describe("String Manipulation Utilities", () => {
  describe("removePlusSign", () => {
    it("should remove the plus sign at the beginning of a string", () => {
      expect(removePlusSign("+12345")).toBe("12345");
    });

    it("should return the string unchanged if there is no plus sign", () => {
      expect(removePlusSign("12345")).toBe("12345");
    });

    it("should return an empty string if the input is just a plus sign", () => {
      expect(removePlusSign("+")).toBe("");
    });
  });

  describe("maskPhoneNumber", () => {
    it("should mask the middle digits of a phone number", () => {
      expect(maskPhoneNumber("1234567890")).toBe("12******90");
    });

    it("should throw an error if the phone number is too short", () => {
      expect(() => maskPhoneNumber("123")).toThrow("Phone number is too short to mask.");
    });

    it("should work correctly for phone numbers with exactly 4 digits", () => {
      expect(maskPhoneNumber("1234")).toBe("1234");
    });

    it("should correctly handle a phone number with different lengths", () => {
      expect(maskPhoneNumber("1234567")).toBe("12***67");
    });
  });
});
