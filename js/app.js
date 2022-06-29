function updateNumber(productPrice,price,productIncressDecress,isNumbers){
    const productInput = document.getElementById(productIncressDecress);
    let productNumber = productInput.value;
    if(isNumbers == true){
        productNumber= parseInt(productNumber)+1;
    }else if (productNumber>0){
        productNumber = parseInt(productNumber)-1;
    }
    productInput.value = productNumber;
       //Update product Price 
       const productAmount=document.getElementById(productPrice);
       productAmount.innerText = productNumber*price;

       //update subtotal 
       updateTotal()
  
}

function updateTotal(){
    const mobileInput = document.getElementById("mobile-number");
    const mobileNumber = mobileInput.value;
    const mobileTotal = mobileNumber*1219;
   const caseInput = document.getElementById("case-number");
   const caseNumber = caseInput.value;
   const caseTotal = caseNumber * 59;
   const subTotalAmount = mobileTotal+caseTotal;
  const subtotal = document.getElementById("sub-total").innerText=subTotalAmount;
 //update tax amount
   const taxAmount = subTotalAmount/10;
   document.getElementById("tax-amount").innerText = taxAmount;

   //update total Price 
   const totalPrice = subtotal+taxAmount;
   document.getElementById("total-amount").innerText=totalPrice;
}

document.getElementById("mobile-plus").addEventListener("click", function(){
    updateNumber("mobile-price",1219,"mobile-number",true)
})

document.getElementById("moblie-minus").addEventListener("click", function(){
    updateNumber("mobile-price",1219,"mobile-number",false)
})
document.getElementById("case-plus").addEventListener("click", function(){
    updateNumber("case-price",59,"case-number",true)
})
document.getElementById("case-minus").addEventListener("click", function(){
    updateNumber("case-price",59,"case-number",false)
})