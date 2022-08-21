# Food-Delivery-App backend

Food-Delivery-App is a single-page-application, through which users can view
available products and order food delivery.

## Installation

Installation is not required, it is a [site](https://gls-food-app.netlify.app/),
which is ready for interaction from any browser.

## Usage

The site consists of three pages: Shop, Shopping Cart and History.

The page Shop here users can choose a shop, then add goods to the cart, displays
products sorted by provider, which can be selected thanks to the sidebar. Users
can order products only from one shop, so if the user has added at least one
product to the cart, he is automatically allowed to place an order only from the
provider whose first product he has already added.

The page Shopping Cart where the user can check all added products, remove some
of them or change the count. And add a name, an email, a phone number, and an
address to form an order .The map allows you to immediately see the distance
from the selected store to the customer's address. The order should be saved in
the database after the user clicks the “submit” button.

The page History where users can find their orders using their email and phone
number, or order number.

## Tech Stack

**Client:** React, RTK Query, Chakra-UI

**Server:** Node, Express

**Database:** MongoDB

### Backend

-[Repository of backend](https://github.com/Glasgalas/Food-Delivery-App_backend)

-Deploy on [heroku](https://www.heroku.com/)

### Frontend

-[Repository of frontend](https://github.com/Glasgalas/Food-Delivery-App_frontend)

-Deploy on [netlify](https://www.netlify.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
