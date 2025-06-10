function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length<=1){
		return 0;
	}
	let totalCost=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);

		let first = arr.shift();
		let second = arr.shift();

		let cost=first+second;
		totalCost=totalCost+cost;
	}
	return totalCost;
  
}
console.log(mincost([4, 3, 2, 6]));
console.log(mincost([1, 2, 3, 4, 5]));
module.exports=mincost;
