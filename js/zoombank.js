// Enter Button handler
let enterBtn=document.getElementById('enter-btn');
enterBtn.addEventListener('click',function(){
    let loginArea=document.getElementById('login-area');
    loginArea.style.display="none";
    let mainPage=document.getElementById('main-page');
    mainPage.style.display="block";
});
// Deposit Button handler
let depositBtn=document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    let depositNumber=getInputNumber('depositAmount');
    // let currentDeposit=document.getElementById('currentDeposit').innerText;
    // let currentDepositNumber=parseFloat(currentDeposit);
    // let totalDepositAmount=depositNumber+currentDepositNumber;
    // document.getElementById('currentDeposit').innerText=totalDepositAmount;

    updateSpanText('currentDeposit',depositNumber);
    updateSpanText('currentBalance',depositNumber);
    document.getElementById('depositAmount').value ="";
});

// Withdraw Button Event handler
let withdrawBtn=document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    let withdrawNumber=getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw',withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
    // console.log(withdrawNumber);
    document.getElementById('withdrawAmount').value="";
});

let getInputNumber = (id) => {
    let withdrawAmount=document.getElementById(id).value;
    let withdrawNumber=parseFloat(withdrawAmount);
    return withdrawNumber;
}
let updateSpanText = (id,depositNumber) => {
    let currentBalance=document.getElementById(id).innerText;
    let currentBalanceNumber=parseFloat(currentBalance);
    let totalBalance=depositNumber+currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

