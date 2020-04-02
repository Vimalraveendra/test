const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpicture.com"];

describe("searchgoogle", () => {
  it("it is a silly test", () => {
    expect("hello").toBe("hello");
  });

  it("searching for google ", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]),
      expect(googleSearch("dog", dbMock)).toEqual([
        "dog.com",
        "dogpicture.com"
      ]);
  });

  it("should work with undefined & null  ", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]),
      expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("should  not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
