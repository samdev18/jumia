# Jumia

# About the project
This project was created using nodeJS and express. It basically allows you to send batches of orders to the api and the API will process the data and persist it.
Once it is a simple project and didn't have much free time because of my work, I didn't create a chunk process to persist a really large amount of data so, this project can hold a small amount of data.

# How to use it 
1 - Clone the repository
2 - use the "npm install" command 
6 - use "npm start" command
5 - In another terminal use  "npx prisma studio" command to open the database in your browser

Now you are able to acess the API throught "localhost:3333"

the endpoints: 

"/orders/process"<POST> - calls the serviceA (processment) which will process data, get the country based on the phone number and then store the processed data into the database.

observation: you have to set up your request to use Multipart Form request and then, send the csv with the batches.

"/orders/country/"<GET> Retrieves an array of counters which counts the amount of orders per country
"/orders/weight/"<GET> Retrieves an array of counters which counts the sum of parcel_weights per country
"/orders"<GET> Retrieves a list of orders based on filters that you can use through query params.
example: /orders?page=1&per_page=5&country=Cameron


There is a csv which you can use in the "csv" folder
