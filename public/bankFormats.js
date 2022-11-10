/*
To add new bank: 
Add new bank object . Eg:
    export let BANKWEST = {};
Then add data options and set them to their column name to match the one your bank uses. E.g.:
    BANKWEST[ACCOUNT_NUMBER] = "Account Number";
    BANKWEST[DATE] = "Transaction Date";
*/

//Data - use or add to these as needed
export const ACCOUNT_NUMBER = "accountNumber";
export const DATE = "transactionDate";
export const DESCRIPTION = "narration";
export const DEBIT = "debit";
export const CREDIT = "credit";
export const BALANCE = "balance";
export const LEAVE_OUT_FIELDS = "leaveOut";
export const CATEGORY = "Category"; // Don't remove this

//Bank formats
export let BANKWEST = {};
BANKWEST[ACCOUNT_NUMBER] = "Account Number";
BANKWEST[DATE] = "Transaction Date";
BANKWEST[DESCRIPTION] = "Narration";
BANKWEST[DEBIT] = "Debit";
BANKWEST[CREDIT] = "Credit";
BANKWEST[BALANCE] = "Balance";
BANKWEST[LEAVE_OUT_FIELDS] = ["BSB Number", "Cheque Number", "Transaction Type"];
