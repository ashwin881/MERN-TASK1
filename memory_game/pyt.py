# Python3 program for the above approach

# Array for memoization
dp = []

# recursive function to calculate the
# minimum cost using dynamic programming
def minCostUtil(a, n, b, m, c, removed):
	global dp

	# Base Case - reached the end of the string
	if n == 0 or m == 0:
		# removed 0 characters
		# return high +ve value
		if removed == 0:
			return 99999
		return 0

	# return pre - calculated value
	if dp[n][m][int(bool(removed))] != -1:
		return dp[n][m][int(bool(removed))]

	# 1. Removing the character from A and
	# adding the cost
	# 2. Moving forward to remove some other
	# character and decrease the counter as
	# this character will not be removed.
	if a[n - 1] == b[m - 1]:
		dp[n][m][int(bool(removed))] = min(c[n - 1] + minCostUtil(a, n - 1,
																b, m, c, removed), minCostUtil(a, n - 1, b, m - 1, c, removed - 1))
		return dp[n][m][int(bool(removed))]

	# if no match, then move through string
	# A and try removing some other
	# character which matches, ie, can be
	# part of the subsequence that is equal to B
	else:
		dp[n][m][int(bool(removed))] = minCostUtil(a, n - 1, b, m, c, removed)
		return dp[n][m][int(bool(removed))]

# function to calculate minimum bed
def minCost(a, b, c):
	global dp
	for i in range(101):
		dp.append([])
		for j in range(101):
			dp[i].append([])
			for k in range(2):
				dp[i][j].append(-1)

	return minCostUtil(a, len(a), b, len(b), c, len(b))

# Driver Code
A = "cccab"
B = "ccab"
arr = [1, 3, 5, 4, 5]
print(minCost(A, B, arr))

# This code is contributed by phasing17
