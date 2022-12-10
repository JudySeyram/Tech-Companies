# Tech Companies API

### The technologies used in creating this project are:
Node.js, Express.js, Mongoose, and MongoDb

### Project Description
This is an API that implements the CRUD endpoints. It creates, reads, updates and deletes data from the database with data including the company name, company’s head office,company e-mail, company phone, number of employees and the company's website

### :rocket: How to get started

- Make sure to have Git and Node.js installed on your computer
- Clone the project by running: `git clone `https://github.com/JudySeyram/Tech-Companies`
- cd into the project and run `npm install`
- create a `.env` file in the root folder and copy the content in the `.env.example`into it.
- run `npm start` to start the project.
 
These are the HTTP response codes used in this project:
| Status Codes | Indication                                                                                            |
|   ---        | ---                                                                                                   |
|  `200`       | This `OK` status code indicates that a request has succeeded                                          |
|  `400`       | This `bad request error` status code indicates that the request sent to the server is incorrect       |
|  `404`       | This `not found error` status code indicates that the resource is not found.        |
|  `500`       | This `internal server error` status code indicates that something has gone wrong on the web server           |

<hr>

The routes featured in this project:
| API routes(url)       | Method   | Description                                         |
| ---                   | ---      | ---                                                 |
| /         | `GET`   |  Api home page                   |
| /getOne/id   | `GET`   | Get a company by ID                 |
| /post   | `POST`   | Add a company to the database               |
| /update/id | `PUT`   | Update a company information by ID |
| /delete/id | `DELETE`   | Delete companyfrom database               |

<hr>


👤 **Author**:

| Github  | Linkedin |
| ------------- | ------------- |
| [@judyseyram](https://github.com/JudySeyram)  | [Judith Amegbe](https://gh.linkedin.com/in/amegbe-judith-5b881811a)  |
