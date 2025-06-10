function mincost(arr) {
    // If there's only one or no rope, no cost is needed
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // Keep combining ropes until one rope is left
    while (arr.length > 1) {
        // Step 1: Sort the ropes to find the two smallest
        arr.sort((a, b) => a - b);

        // Step 2: Take the two shortest ropes
        let first = arr[0];
        let second = arr[1];

        // Step 3: Cost to connect them
        let cost = first + second;

        // Step 4: Add this cost to the total cost
        totalCost += cost;

        // Step 5: Remove the two ropes from the array
        arr.splice(0, 2);

        // Step 6: Add the new combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
}
console.log(mincost([4, 3, 2, 6]));     // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33

module.exports = mincost;
