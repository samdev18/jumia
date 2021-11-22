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

"/orders/process"[POST] - Calls the serviceA (processment) which will process data, get the country based on the phone number and then store the processed data into the database.

observation: you have to set up your request to use Multipart Form request and then, send the csv with the batches.

"/orders/country/"[GET] Retrieves an array of counters which counts the amount of orders per country

"/orders/weight/"[GET] Retrieves an array of counters which counts the sum of parcel_weights per country

"/orders"[GET] Retrieves a list of orders based on filters that you can use through query params.
example: /orders?page=1&per_page=5&country=Cameron

## There is a csv which you can use in the "csv" folder


# Decision Making
When I was building the project, I've faced some problems, for example, I had to test some regex into the phone number to find the country. for this particular case, I've decided to create an array of objects containing the countries and their regex.

const countries = [
    { title: 'Cameron', regex: /\(237\)\ ?[2368]\d{7,8}$/g },
    { title: 'Ethiopia', regex: /\(251\)\ ?[1-59]\d{8}$/g },
    { title: 'Morocco', regex: /\(212\)\ ?[5-9]\d{8}$/g },
    { title: 'Mozambique', regex: /\(258\)\ ?[28]\d{7,8}$/g },
    { title: 'Uganda', regex: /\(256\)\ ?\d{9}$/g },
]

Once I had this object, I could get the country using the filter method.

function getCountry(numero: string) {
    const country = countries.filter(el => el.regex.exec(numero))
    return country.length ? country[0].title : ''
}

Another problem was "how to handle the csv file and process it"
I've decided to create a temporary file containing the csv binary file and process it. after the processment is completed, I delete the file

Talking about the database, I've decided to use prisma because it is easier to create the modoles and migrations and you don't neet to install any softwares to use an interface (prisma studio does that for you, you can use the interface into your web browser)
The problem with prisma is the amount of data that it can handle. I've made some researches and I've noticed that a lot of people face this problem because prisma does not have a "create many" method.