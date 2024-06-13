 ## E-commerce Project Overview

 This E-commerce API is built with TypeScript and Express, integrating MongoDB via Mongoose and utilizing Zod for validation. It provides a comprehensive set of endpoints for managing products and orders, including creation, retrieval, updating, deletion, product search, and inventory management.


## Technology Used
TypeScript: For a statically typed programming experience.
Express: A minimal and flexible Node.js web application framework.
MongoDB: A NoSQL database for storing products and orders.
Mongoose: An elegant MongoDB object modeling tool.
Zod: A TypeScript-first schema declaration and validation library.

# API Endpoints:

## Product Management
*Product Management:* Create, retrieve, update, and delete products.
Create a New Product

-   Endpoint: /api/products
-   Method: POST


Retrieve a List of All Products

-   Endpoint: /api/products
-   Method: GET

Retrieve a Specific Product by ID

-   Endpoint: /api/products/:productId
-   Method: GET

Update Product Information

-   Endpoint: /api/products/:productId
-   Method: PUT

Delete a Product

-   Endpoint: /api/products/:productId
-   Method: DELETE


Search for a Product

-   Endpoint: /api/products?searchTerm=name
-   Method: GET

*Order Management:* Create, retrieve, update, and delete orders.

## Order Management

Create a New Order

-   Endpoint: /api/orders
-   Method: POST

Retrieve All Orders

-   Endpoint: /api/orders
-   Method: GET

Retrieve Orders by User Email

-   Endpoint: /api/orders?email=level2@programming-hero.com
-   Method: GET


*Product Search:* Search for products based on various criteria.

*Inventory Management:* Keep track of product inventory levels.

## Getting Started
# Prerequisites
Node.js and npm installed
MongoDB instance running

## Run the Project

Clone the Repository

git clone https://github.com/MHRipon01/E-commerce-Backend-Practice.git

cd E-commerce-Backend-Practice

## Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000

DATABASE_URL=< mongodb-uri >

Start the Server

npm start

The server will start running on http://localhost:5000.

Live Server Link: https://ecommerce-backend-node-self.vercel.app