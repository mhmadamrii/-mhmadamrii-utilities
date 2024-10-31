import {encodeObjectToBase64, decodeObjectFromBase64} from "../src/encoding";

describe("Encoding Utilities", () => {
  it("should encode an object to a Base64 string", () => {
    const obj = {foo: "bar"};
    const encoded = encodeObjectToBase64(obj);
    expect(encoded).toBe(btoa(JSON.stringify(obj)));
  });

  it("should decode a Base64 string back to an object", () => {
    const obj = {foo: "bar"};
    const encoded = encodeObjectToBase64(obj);
    const decoded = decodeObjectFromBase64<typeof obj>(encoded);
    expect(decoded).toEqual(obj);
  });
});
