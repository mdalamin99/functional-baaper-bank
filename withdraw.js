document.getElementById("btn-withdraw").addEventListener('click',function(){
    const newWithdrawAmount=getElementByvaluId("withdraw-field");

    const previousWithdrawTotal=getElementByvaluId2("total-withdraw");
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    addtotalmoney("total-withdraw",newWithdrawTotal);

    const previousBalanceTotal=getElementByvaluId2("Balance-total");
    const totalBalace=previousBalanceTotal-newWithdrawAmount;
    addtotalmoney("Balance-total",totalBalace);
})