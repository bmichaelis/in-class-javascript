describe('findNumbers', () => {
  it('returns an array with one element when passed a number string', () => {
    let result = findNumbers('123');
    expect(result.length).toEqual(1);
  });
  it('returns an array with 123 when passed in string "123"', () => {
    let result = findNumbers('123');
    expect(result[0]).toEqual(123);
  });
  it('returns an array with numbers when passed strings "123", "345"', () => {
    let result = findNumbers('123', '345');
    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
  });
  it('returns an empty array when nothing was passed in', () => {
    let result = findNumbers();
    expect(result.length).toEqual(0);
  });
  it('returns an empty array when "", "", "" (some empty strings) passed in', () => {
    let result = findNumbers('', '', '');
    expect(result.length).toEqual(0);
  });
  it('returns an array with 123 when the number 123 was passed in', () => {
    let result = findNumbers(123);
    expect(result[0]).toEqual(123);
  });
  it('returns an array with 123, 45, 9, when "123", "45", "yu", "9" were passed in', () => {
    let result = findNumbers('123', '45', 'yu', '9');
    expect(result[0]).toEqual(123);
    expect(result[1]).toEqual(45);
    expect(result[2]).toEqual(9);
  });
  it('returns an empty array when "ty", "0p", "yu", "9L" are passed in', () => {
    let result = findNumbers('ty', '0p', 'yu', '9L');
    expect(result.length).toEqual(0);
  });
});
