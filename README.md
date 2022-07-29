# Simple NodeJS REST APIs app

Build with NodeJS + Express

## Features

- validation

## How to run

Step 1. Run the following cmd:

```bash
npm install
npm start
```

In Postman check the following APIs
- GET http://localhost:8080/feed/posts-kali
- POST http://localhost:8080/feed/post-kali  with body 
{
	"title": "My new post", 
	"content": "Now, here, you see, it takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!",
    "author": {
        "name": "Red Queen"
    }
}

## License
[MIT](https://choosealicense.com/licenses/mit/)