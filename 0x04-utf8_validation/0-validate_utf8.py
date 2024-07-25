#!/usr/bin/python3
"""UTF-8 Validator
"""


def validUTF8(data):
    """Takes list of data and returns bool value if vale is UTF-8 Valid
    """
    num_bytes = 0

    # Masks to check the most significant bit
    mask1 = 1 << 7  # 10000000
    mask2 = 1 << 6  # 01000000

    # For each byte in the data
    for num in data:
        # Create a mask to check the most significant bits
        mask = 1 << 7
        if num_bytes == 0:
            # Count the number of leading 1s in the first byte to determine
            # the number of bytes in the UTF-8 character
            while mask & num:
                num_bytes += 1
                mask >>= 1

            # 1 byte character
            if num_bytes == 0:
                continue

        # If the number of bytes is more than 4 or less than 2, it's invalid
            if num_bytes == 1 or num_bytes > 4:
                return False
        else:
            # Check that the first two bits are 10xxxxxx
            if not (num & mask1 and not (num & mask2)):
                return False

        # Decrement the number of bytes left to process
        num_bytes -= 1

    # If all characters were processed successfully, num_bytes should be 0
    return num_bytes == 0
