function totalPhoneBill(billList) {
    const bill = billList.split(', ');
    let total = 0;
    const callCost = 2.75; // these constants tell us that these values will not change as it is given
    const smsCost = 0.65;
    
    for (let i = 0; i < bill.length; i++) {
      const totalBillList = bill[i].trim();
      if (totalBillList.includes('call')) { // The 2 'calls' are added to the 'callCost' of the 'total' then the rest is added to the total 'smsCost'
        total += callCost;
      } else {
        total += smsCost;
      }
    }
    return 'R' + total.toFixed(2); // We want our string to return in the 'Rand' currency format with 2 decimal places put in
  }
  
  var totalBillList = 'call, sms, call, sms, sms';
  console.log(totalPhoneBill(totalBillList));