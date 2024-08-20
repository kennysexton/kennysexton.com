import requests
from PIL import Image
import os
import base64


def download_and_resize(url_list, output_dir, new_width):
    """Downloads images from a list of URLs, resizes them, and saves them to a directory.

    Args:
      url_list: A list of image URLs.
      output_dir: The directory to save the resized images.
      new_width: The desired width of the resized images.
    """

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for url in url_list:
        try:
            # Download the image
            response = requests.get(url, stream=True)
            response.raise_for_status()

            # Extract filename from URL
            filename = url.split("/")[-1]

            # Add file format to the end if not already there
            if not filename.lower().endswith(".jpeg"):
                filename += ".jpeg"

            # Save the downloaded image temporarily
            with open(filename, "wb") as out_file:
                for chunk in response.iter_content(1024):
                    if chunk:
                        out_file.write(chunk)

            # Open the image using Pillow
            img = Image.open(filename)

            # Get height (preserve aspect ratio)
            new_height = int(new_width * img.size[1] / img.size[0])

            # Resize the image
            resized_img = img.resize((new_width, new_height), Image.LANCZOS)

            # Save the resized image
            output_path = os.path.join(output_dir, filename)
            resized_img.save(output_path)

            with open(output_path, "rb") as f:
                encoded_string = base64.b64encode(f.read()).decode("utf-8")

            with open("output.txt", "w") as file:
                file.write(encoded_string)

            # Save the base64 string

        #   # Delete the temporary file
        #   os.remove(filename)

        except Exception as e:
            print(f"Error processing image: {url}")
            print(e)


image_urls = [
    "https://lh3.googleusercontent.com/pw/AP1GczOoPpuy46QN2_e_dGhAr5uvI0NF7itzBjt6yPlaKsWsYJyZI4BoNBTzSnQP90PQdLLAQEZMIOSfpRgNIhf7F015tWzKhAKNbgKwMigoDccJ42dGdajS=w2400",
]

download_and_resize(image_urls, "resized_images", 10)
