import requests
from PIL import Image
from typing import Dict
import os
import base64
import json


class ImageData:
    def __init__(self, src, alt, aspect_ratio):
        self.src = src
        self.alt = alt
        self.aspect_ratio = aspect_ratio


def download_and_resize(imageData, fetched_dir, resized_dir, final_output_name, new_width):
    """Downloads images from a list of URLs, resizes them, and saves them to a directory.

    Args:
      imageData: A list of ImageData gathered from a JSON file
      fetched_dir: The directory to save the fetched originals
      resized_dir: The directory to save the resized images
      final_output_name: The name of the new JSON file generated with thumbnails
      new_width: The desired width of the resized images
    """
    if not os.path.exists(fetched_dir):
        os.makedirs(fetched_dir)

    if not os.path.exists(resized_dir):
        os.makedirs(resized_dir)

    output_json = []

    for item in imageData:
        try:

            # Download the image
            response = requests.get(item.src, stream=True)
            response.raise_for_status()

            # Use alt text for file name so I can tell what is going on
            filename = item.alt

            # Add file format to the end if not already there
            if not filename.lower().endswith(".jpeg"):
                filename += ".jpeg"

            # Path to save originals
            originals_path = os.path.join(fetched_dir, filename)

            # Save the downloaded image
            with open(originals_path, "wb") as out_file:
                for chunk in response.iter_content(1024):
                    if chunk:
                        out_file.write(chunk)

            # Open the fetched images using Pillow
            img = Image.open(originals_path)

            # Get height (preserve aspect ratio)
            new_height = int(new_width * img.size[1] / img.size[0])

            # Resize the image
            resized_img = img.resize((new_width, new_height), Image.LANCZOS)

            # Save the resized image
            resized_path = os.path.join(resized_dir, filename)
            resized_img.save(resized_path)

            # Save the base64 string
            with open(resized_path, "rb") as f:
                encoded_string = base64.b64encode(f.read()).decode("utf-8")

            data = {
                "src": item.src,
                "alt": item.alt,
                "aspect_ratio": item.aspect_ratio,
                "blurDataURL": "data:image/png;base64," + encoded_string,
            }

            output_json.append(data)

        except Exception as e:
            print(f"Error processing image: {originals_path}")
            print(e)

    # Create a new JSON file with blur data
    with open(final_output_name + ".json", "w", encoding="utf-8") as file:
        json.dump(output_json, file, indent=2, ensure_ascii=False)

    # Logs
    print(f"Added {len(output_json)} thumbnails to {final_output_name}")


def get_image_urls(file_path):
    with open(file_path, "r") as f:
        data = json.load(f)

    # Init the list of json objects
    imageData = []
    for item in data:
        imageData.append(ImageData(item["src"], item["alt"], item["aspect_ratio"]))
    return imageData


# def getImageUrls(jsonFile)
image_urls_and_alt_tags = get_image_urls("images.json")

download_and_resize(image_urls_and_alt_tags, "fetched_images", "resized_images", "images_with_thumbnails", 10)
