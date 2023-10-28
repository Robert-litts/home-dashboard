![Dashboard](MM_calendar_time_weather_notes_sports.png)

# Custom Home Dashboard
This project contains the congiruation files needed to take automatically take an inexpensive single board computer such as an Orange or Raspberry Pi and turn it into a visually appealing home dashboard. This is built using [Magic Mirror](https://github.com/MichMich/MagicMirror) and contains the following open source libraries:
* [MMM-MonthlyCalendar](https://github.com/kolbyjack/MMM-MonthlyCalendar)
* [MMM-Wallpaper](https://github.com/kolbyjack/MMM-Wallpaper)
* [MMM-Remote Control](https://github.com/Jopyth/MMM-Remote-Control)
* [MMM-MyScoreboard](https://github.com/jclarke0000/MMM-MyScoreboard)
* [MMM-MyStandings](https://github.com/vincep5/MMM-MyStandings)

## Prerequisites
* TV or Monitor for display (with at least one available HDMI port)
  - This project assumes 1920x1080 resolution.
  - Larger or smaller resolutions (not screen sizes) may require readjusting the sizes of certain modules using custom CSS.
* A single board computer, preferences + prices listed below in order of increasing cost and compatability
  - [Orange Pi Zero 2](https://www.amazon.com/Orange-Pi-Allwinner-Open-Source-Android10/dp/B0B973214J)
    1. At $47.99, this kit is the cheapest you will find a single board computer compatible with this project.
  - [Orange Pi 3 LTS](https://www.amazon.com/Orange-Pi-Allwinner-Computer-Support/dp/B09TQZH4GJ/ref=sr_1_2?crid=1DL5D33N6X4BQ&keywords=orange+pi+3+lts&qid=1698512209&s=electronics&sprefix=orange+pi+3+lts%2Celectronics%2C59&sr=1-2&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840)
    1. At $60, this kit is only $12 more than the Orange Pi Zero 2, but has an Armbian image built with the 5.15LTS linux kernel. Additionally, this board has improved hardware specs, a full sized HDMI port, multiple USB ports, and will ultimately allow for a much smoother experience.
  - [Raspberry Pi 3B+](https://www.amazon.com/Raspberry-Pi-Model-Board-Plus/dp/B0BNJPL4MW/ref=sr_1_3?crid=2I2PYM9BYT84N&keywords=Raspberry+pi+3b&qid=1698512655&s=electronics&sprefix=raspberry+pi+3b%2Celectronics%2C62&sr=1-3)
    1. Now that Raspberry Pi's are actually available, the 3B+ at $47 is a great deal which will provide an excellent platform for this project. Unlike the Orange Pi models above, software supportability will not be an issue here and there will be widespread community support for any issues that arise.
    2. You will also need a [power supply](https://www.amazon.com/CanaKit-Raspberry-Supply-Adapter-Listed/dp/B00MARDJZ4/ref=sr_1_20?crid=NIYOW2YJD5MA&keywords=Raspberry+pi+3b%2B+kit&qid=1698512808&s=electronics&sprefix=raspberry+pi+3b%2B+kit%2Celectronics%2C60&sr=1-20) since this only comes with the board itself.
    3. I recommend that you spend $4-5 more for a [case/fan/power supply kit](https://www.amazon.com/Miuzei-Raspberry-Heatsinks-Supply-Compatible/dp/B07BTHNW9W/ref=pd_bxgy_img_sccl_2/140-1220211-7057031?pd_rd_w=yHsPN&content-id=amzn1.sym.43d28dfc-aa4f-4ef6-b591-5ab7095e137f&pf_rd_p=43d28dfc-aa4f-4ef6-b591-5ab7095e137f&pf_rd_r=77PRN4345TAQBB92NSYY&pd_rd_wg=HIgEW&pd_rd_r=a928bf38-6300-4a4a-a4b2-0d26a1f7043f&pd_rd_i=B07BTHNW9W&psc=1)
* [Micro SD Card](https://www.amazon.com/SanDisk-Extreme-microSDXC-Memory-Adapter/dp/B09X7C7LL1/ref=sr_1_8?crid=1MAY66DVIZ0FQ&keywords=micro+sd+card&qid=1698513031&s=electronics&sprefix=micro+sd+card%2Celectronics%2C85&sr=1-8) or [this 2 pack](https://www.amazon.com/SanDisk-2-Pack-microSDHC-Memory-2x32GB/dp/B08J4HJ98L/ref=sr_1_5?crid=6UVN6B6DWQJW&keywords=micro%2Bsd%2Bcard&qid=1698512146&s=electronics&sprefix=micro%2Bsd%2Bcard%2Celectronics%2C67&sr=1-5&th=1)

## Total Price
* Orange Pi Zero 2 - $57.98
  - $47.99 board + case + power supply
  - $10.99 Micro SD Card
* Orange Pi 3 LTS - $70.99
  - $60 board + case + power supply
  - $10.99 Micro SD Card
* Raspberry Pi 3B+ - $71.98
  * $47 - Board
  * $13.99 - Case + Fan + power supply
  * $10.99 - MicroSD Card
