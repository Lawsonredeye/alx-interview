#!/usr/bin/python3
"""Interview questions
"""


def makeChange(coins, total):
    if total == 0:
        return 0
    
    dp = [0] + [float('inf')] * total
    for coin in coins:
        # print(coin)
        for amount in range(coin, total + 1):
            dp[amount] = min(dp[amount], dp[amount - coin] + 1)
    
    if dp[total] == float('inf'):
        return -1
    return dp[total]

print(makeChange([1, 2, 25], 37))
