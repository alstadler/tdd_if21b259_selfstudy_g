describe("Gilded Rose", function() {

  it("should decrease sell_in and quality by 1 for normal items", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual("9");
    expect(items[0].name).toEqual("19");
  });
  
});
