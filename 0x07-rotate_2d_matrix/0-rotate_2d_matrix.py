#!/usr/bin/python3
"""python Interview question on solving
2D Matrix
"""


def rotate_2d_matrix(matrix: list[list]):
    """rotates an 2D matrix
    """
    # matrix.reverse()
    for i in range(len(matrix[0])):
        # access the inner element and then use a temp var to
        # swap each element value
        for j in range(i):
            temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
    # access each elements of the matrix and then reverse it
    for i in matrix:
        i.reverse()
