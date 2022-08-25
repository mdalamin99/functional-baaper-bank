function getElementByvaluId(inputField){
      const inputFieldid=document.getElementById(inputField);
      const inputFieldString=inputFieldid.value;
      const inputParse=parseFloat(inputFieldString);
      inputFieldid.value='';
      return inputParse;
}

function getElementByvaluId2(deposit){
      const totalAmount=document.getElementById(deposit);
      const totalAmountString=totalAmount.innerText;
      const newdepositAmound=parseFloat(totalAmountString);
      return newdepositAmound;
}

function addtotalmoney(elemetid,newelemet){
      const textElemt=document.getElementById(elemetid);
      textElemt.innerText=newelemet;
}