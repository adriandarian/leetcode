public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] arr = new int[2];
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (map.get(nums[i]) != null) {
                arr[0] = map.get(nums[i]);
                arr[1] = i;
                break;
            } else {
                map.put(target - nums[i], i);
            }
        }
        return arr;

    }
}