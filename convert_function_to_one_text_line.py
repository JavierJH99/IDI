import re

function_body = """
xhr.open("GET", urlStringTelegram + `&text=${pregunta}`);
    xhr.send();
"""

modified_function_body = function_body.replace('"', "'")

print(re.sub("\s+", " ", modified_function_body))
