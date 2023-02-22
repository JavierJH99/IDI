import re

function_body = """
"""

modified_function_body = function_body.replace('"', "'")

print(re.sub("\s+", " ", modified_function_body))
