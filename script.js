//your JS code here. If required.
// const color = document.getElementBYId("colorSelect");
// const btn = document.getElementBYTag("input");
// btn.addEventListner(click, () =>{
// 	remove.color
// });

  document.querySelector('input[type="button"]').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;
    colorSelect.remove(selectedIndex);
  });

