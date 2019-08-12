'use strict';

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];
const accountNumb: number = 11234543;

function getNameAndBalance(array: any[], accNumb: number) {
  let info: string[] = [];
  for (let x: number = 0; x < array.length; x++) {
    if (array[x].accountNumber === accNumb) {
      info.push(array[x].clientName, array[x].balance)
    }
  }
  return info;
}

function trnsfer(array: any[], acc1: number, acc2: number, transmoney: number) {
  let accountnumbs:number[]=[];
  array.forEach(function(getAccNumbs){
    accountnumbs.push(getAccNumbs.accountNumber);
  })
  if(accountnumbs.indexOf(acc1)===-1 ||accountnumbs.indexOf(acc2)===-1 ){
    return '404 - account not found'
  } else {
    array.forEach(function (findaccs) {
      if (findaccs.accountNumber === acc1) {
        findaccs.balance -= transmoney;
      } else if (findaccs.accountNumber === acc2) {
        findaccs.balance += transmoney;
      } else {
      }
    });
    return array;
  }
}

let acc1:number=43546731;
let acc2:number=23456311;

console.log(getNameAndBalance(accounts, 11234543));
console.log(trnsfer(accounts,acc1,acc2,500));
