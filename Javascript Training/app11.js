let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;

// Even though these have identical arrays, they are still going to be marked as different because of their reference types.

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : []
};

if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS');
}




