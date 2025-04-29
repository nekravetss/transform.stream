import re

def reverse_words(text):
    # Розбиваємо текст на слова і пробіли, але не перевертаємо пробіли
    words = re.findall(r'\S+|\s+', text)  # \S+ знаходить слова, \s+ — пробіли
    reversed_words = [word[::-1] if word.strip() else word for word in words]
    return ''.join(reversed_words)

def process_file(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = f.read()
    except Exception as e:
        print('Помилка читання файлу:', e)
        return

    reversed_text = reverse_words(data)

    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(reversed_text)
        print(f'Файл успішно збережено як {output_file}')
    except Exception as e:
        print('Помилка запису файлу:', e)

input_file_path = 'input.txt'
output_file_path = 'output.txt'

process_file(input_file_path, output_file_path)
