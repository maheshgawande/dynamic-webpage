var createArr = [];
var deleteArr = [];

function addDiv() {

  if (deleteArr.length == "") {
    if (createArr.length < 5) {
      var printDiv = document.createElement('div');
      printDiv.className = "newDiv";
      var childDiv = document.getElementById('dispDiv').appendChild(printDiv);
      count = parseInt(document.getElementsByClassName('newDiv').length);
      var divId = "div" + count;
      var newDivId = printDiv.id = divId;

      var divTxt = document.createElement('span');
      divTxt.className = "txt";
      divTxt.id = "span" + count;
      divTxt.innerHTML = "Div " + count;
      document.getElementById(newDivId).appendChild(divTxt);

      var dltBtn = document.createElement('span');
      dltBtn.className = "dltSpan";
      dltBtn.id = "span" + count;
      dltBtn.innerHTML = "X";
      document.getElementById(newDivId).appendChild(dltBtn);
      dltBtn.onclick = removeDiv;

      var count = parseInt(document.getElementsByClassName('newDiv').length);
      createArr.push(count);
    }else {
      alert("Sorry, you cannot add another div!");
    };
  }else {

      var poppedElement = deleteArr.pop();
      var getElement = document.getElementById("div"+ poppedElement );
      console.log(getElement);
      //
      // console.log(poppedElement);
      // console.log(deleteArr);
  };

  function removeDiv() {
    document.getElementById(divId).remove();
    deltedDiv = createArr.pop(divId);
    deleteArr.push(deltedDiv);
    console.log(deleteArr);
  };
};
