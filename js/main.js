//calling of main function
window.onload = (event) => {
  main();
}
function main() {
  setAllTimeDesignations();
};


//Function used to set and update all dates and daytimes
function setAllTimeDesignations() {
  var date = new Date();

  //footer copyright year
  document.getElementById("footer-year").innerHTML = date.getFullYear();
};
