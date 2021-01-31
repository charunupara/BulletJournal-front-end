function getSelectedCategory() {
  let category;

  const title = document.getElementById("title").value;
  const radios = document.getElementsByName("category");
  radios.forEach((radio) => {
    if (radio.checked === true) {
      category = radio.value;
    }
  });

  return {title, category}
}


module.exports = {getSelectedCategory}