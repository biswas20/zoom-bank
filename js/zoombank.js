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
    let depositAmount=document.getElementById('depositAmount').value;
    let depositNumber=parseFloat(depositAmount);
    let currentDeposit=document.getElementById('currentDeposit').innerText;
    let currentDepositNumber=parseFloat(currentDeposit);
    let totalDepositAmount=depositNumber+currentDepositNumber;
    document.getElementById('currentDeposit').innerText=totalDepositAmount;

    let currentBalance=document.getElementById('currentBalance').innerText;
    let currentBalanceNumber=parseFloat(currentBalance);
    let totalBalance=depositNumber+currentBalanceNumber;
    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('depositAmount').value ="";
});
// Withdraw Button Event handler
let withdrawBtn=document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    let withdrawAmount=document.get
    console.log("Some One Click Me")
    
});