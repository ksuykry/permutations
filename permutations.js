var permute = function(nums) {

    let prefix = [];
    let results = []
    permutations(prefix, nums, results)
    return results
};

var permutations = (prefix, arr, res) => {
    if (arr.length === 0) return;
    else if (arr.length == 1) {
        prefix.push(arr[0]);
        res.push(prefix);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice(0)
        let newP = prefix.slice(0)

        newArr.splice(i, 1)
        newP.push(arr[i])
        permutations(newP, newArr, res)
    }
};
