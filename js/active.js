$(".grid").isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: ".grid-item",
  },
});
