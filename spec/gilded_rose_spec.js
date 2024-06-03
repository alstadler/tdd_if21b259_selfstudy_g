describe("Gilded Rose", function() {

  it("should decrease sell_in and quality by 1 for normal items", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should decrease quality twice as fast after sell by date", function() {
    items = [ new Item("Elixir of the Mongoose", 0, 7) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(5);
  });

  it("should not decrease quality below 0", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(0);
  });

  it("should increase quality of 'Aged Brie' as it gets older", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("should never increase quality of item above 50", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(50);
  });

  it("should never decrease quality or sell-in of 'Sulfuras, Hand of Ragnaros'", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("should increase quality of 'Backstage passes' by 1 when more than 10days left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(11);
    expect(items[0].quality).toEqual(21);
  });

  it("should increase quality of 'Backstage passes' by 2 when 10days or less left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(22);
  });

  it("should increase quality of 'Backstage passes' by 3 when 5days or less left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(23);
  });

  it("should drop quality of 'Backstage passes' to 0 when concert is over", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

});
