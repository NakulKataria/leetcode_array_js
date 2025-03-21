function maxArea(height) {
    let i = 0;
    let j = height.length - 1;
    let answer = 0;

    while (i < j) {
        answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i));

        // Move the pointer pointing to the shorter line inward
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return answer;
}