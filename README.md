# ogResearchTest

To run the application:

1. Make sure you have docker installed.
2. Open terminal and run `docker pull mvyc315/ogresearchtest` - This is the image that is being built and pushed for this application to DockerHub by CI (GitHub Actions). 
3. Download `docker-compose.yml` file from this repo or from here: https://drive.google.com/file/d/13_HoB7hknPAbw3TuWN63Y86XABnRANbe/view?usp=sharing
4. Open the terminal, locate directory where you downloaded/placed `docker-compose.yml` and then run command: `docker-compose up -d`
   - Compose file basically orchestrates multiple Docker containers. This is a necessity, since we use postgresql container for our db. It also sets up the execution of or application. Therefore, is an important step.

I had docker-compose.yml in my desktop and ran it from docker terminal: 
![image](https://github.com/user-attachments/assets/97d462da-ec16-4370-9e94-cc8097f5b688)

To access the application press on Docker container "app-1" 8080:8080 port. Or you could as well access it in the browser by "http://127.0.0.1:8080/" or "localhost:8080".
