/**
 * Encodes an object to a Base64 string.
 *
 * @template T - The type of the object being encoded.
 * @param obj - The object to encode, which will be converted to a JSON string.
 * @returns A Base64 encoded string representing the JSON string of the object.
 *
 * @example
 * const encoded = encodeObjectToBase64({ foo: "bar" });
 * console.log(encoded); // Outputs a Base64 string
 */
export const encodeObjectToBase64 = <T>(obj: T): string => {
  const jsonStr = JSON.stringify(obj);
  return btoa(jsonStr);
};

/**
 * Decodes a Base64 string back to an object.
 *
 * @template T - The expected type of the decoded object.
 * @param encodedStr - A Base64 encoded string to decode, representing a JSON string.
 * @returns The decoded object of type `T`.
 * @throws Will throw an error if `encodedStr` is null or empty, or if decoding fails.
 *
 * @example
 * const decoded = decodeObjectFromBase64<{ foo: string }>("eyJmb28iOiJiYXIifQ==");
 * console.log(decoded); // Outputs: { foo: "bar" }
 */
export const decodeObjectFromBase64 = <T>(encodedStr: string | null): T => {
  if (!encodedStr) throw new Error("Encoded string is null or empty");
  const jsonStr = atob(encodedStr);
  return JSON.parse(jsonStr) as T;
};
