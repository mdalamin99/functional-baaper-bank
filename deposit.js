document.getElementById("btn-deposit").addEventListener("click",function(){

     const inputamountfield=getElementByvaluId("Deposit-field");
     const totalAmonudDposti=getElementByvaluId2("deposit-total");
     const totalDeposit=inputamountfield+totalAmonudDposti;
     addtotalmoney('deposit-total',totalDeposit);


     const balance=getElementByvaluId("Balance-total");
     const newTotalBalance=balance+totalDeposit;
     addtotalmoney('Balance-total', inputamountfield);


})