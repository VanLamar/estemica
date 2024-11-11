import os
from PIL import Image

def convert_images_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.JPG')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        webp_file_path = os.path.splitext(file_path)[0] + '.webp'
                        img.save(webp_file_path, 'WEBP')
                        print(f"Файл {file} конвертирован в {webp_file_path}")
                except Exception as e:
                    print(f"Не удалось конвертировать файл {file}: {e}")

directory = 'D:\VScode\WebName\img'
convert_images_to_webp(directory)
