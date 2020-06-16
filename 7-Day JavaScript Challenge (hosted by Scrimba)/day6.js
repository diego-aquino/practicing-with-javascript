// Count how many numbers are left to make the given array consecutive (increasinly)

function makeArrayConsecutive(nums) {
    nums.sort();

    let statuesLeft = 0;

    for (let i = 1; i < nums.length; i++) {
        let difference = nums[i] - nums[i - 1];

        if (difference > 1) {
            statuesLeft += difference - 1;
        }
    }

    return statuesLeft;
}

console.log(makeArrayConsecutive([6, 2, 3, 8]));
