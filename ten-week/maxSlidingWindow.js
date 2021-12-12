/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  const length = nums.length;
  const res = [];
  const queue = [];
  let left = 0;
  let right = k-1;
  for(let i=0; i<length; i++) {
      const cur = nums[i];
      while(queue.length && cur>nums[queue[queue.length-1]]){
          queue.pop();
      }
      queue.push(i);
      while(queue[0]<left){
          queue.shift();
      }
      if(i>=right){
          res.push(nums[queue[0]])
          left++;
      }
  }
  return res;
};