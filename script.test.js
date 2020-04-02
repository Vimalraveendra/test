const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpicture.com"];

it("it is a silly test", () => {
  expect("hello").toBe("hello");
});

it("searching for google ", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]),
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpicture.com"]);
});
