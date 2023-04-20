# lakshmipriya.suntharaj__web_project
I finished my
user curd:
register page [completed]

login page [completed]

profile page [completed]

profile edit [completed]

delete user [completed]


Feature-2

1.recipe crud[completed]

2.recipe-list[completed]

3.update-recipe[completed]

4.recipe delete[currently working]


# Recipe
 
## User  

### Create an account
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, email, and password.
        3. Click the "Create Account" button.
    - Expected Result:
        - The user is redirected to the login page.

### Create an account
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "login" button.
    - Expected Result:
        - The user is redirected to the home page.


### View Recipe
- Scenario 1: Successfully view Recipe
    - Steps:
        1. Log in as a User.
        2. Navigate to the Recipe listing page.
        3. View the list of available Recipe.
    - Expected Result:
        - The user can view the list of available Recipe.

### View Recipe details
- Scenario 1: Successfully view product/item details
    - Steps:
        1. Log in as a User.
        2. Navigate to the Recipe listing page.
        3. Select a Recipe to view its details.
    - Expected Result:
        - The user can view the details of the selected Recipe.

### View Comments of Recipe

- Scenario 1: Successfully view Recipe in Recipe detail page
    - Steps:
        1. Log in as a student.
        2. Navigate to the Recipe detail page.
        3. View the list of comments in the Recipe detail.
    - Expected Result:
        - The student can view the list of comments in the Recipe detail.

### Add Comments to Recipe

- Scenario 1: Successfully view comment in Recipe detail page
    - Steps:
        1. Log in as a student.
        2. Navigate to the Recipe detail page.
        3. View the list of comments in the Recipe detail.
        4. Add Comment to the Recipe using add comment
    - Expected Result:
        - The student can view the list of comments in the Recipe detail.

### Buy a product/item
- Scenario 1: Successfully purchase a product/item
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details.
        4. Click the "Buy Now" button.
        5. Confirm the shipping address and payment method.
        6. Click the "Place Order" button.
    - Expected Result:
        - The user is redirected to the order confirmation page.
        - An order confirmation email is sent to the user's email address.
        - The product/item's stock is reduced by the purchased quantity.

### Add product/item to cart
- Scenario 1: Successfully add product/item to cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to add to cart.
        4. Click the "Add to Cart" button.
    - Expected Result:
        - The product/item is added to the user's cart.

### View items in cart
- Scenario 1: Successfully view items in cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. View the list of items in the cart.
    - Expected Result:
        - The user can view the list of items in the cart.

### Remove item from cart
- Scenario 1: Successfully remove item from cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Remove the selected item from the cart.
    - Expected Result:
        - The item is removed from the user's cart.


## Seller

### Create an account
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, email, and password.
        3. Click the "Create Account" button.
    - Expected Result:
        - The user is redirected to the login page.
        - An email verification link is sent to the user's email address.

### View account details
- Scenario 1: Successfully view account details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the account page.
        3. View the account details such as name, email, and address.
    - Expected Result:
        - The user can view their account details.

### Edit account details
- Scenario 1: Successfully edit account details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the account page.
        3. Click the "Edit Account" button.
        4. Update the account details.
        5. Click the "Save Changes" button.
    - Expected Result:
        - The user's account details are updated.

### Create a new product to sell
- Scenario 1: Successfully create a new product to sell
    - Steps:
        1. Log in as a seller.
        2. Navigate to the product creation page.
        3. Enter the product details such as name, description, price, and stock.
        4. Upload product images.
        5. Click the "Create Product" button.
    - Expected Result:
        - The new product is created and added to the seller's list of products.

### View list of products
- Scenario 1: Successfully view list of products
    - Steps:
        1. Log in as a seller.
        2. Navigate to the products page.
        3. View the list of products.
    - Expected Result:
        - The seller can view their list of products.

### Edit product details
- Scenario 1: Successfully edit product details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the products page.
        3. Select a product to edit.
        4. Click the "Edit Product" button.
        5. Update the product details.
        6. Click the "Save Changes" button.
    - Expected Result:
        - The product details are updated.

### View list of orders
- Scenario 1: Successfully view list of orders
    - Steps:
        1. Log in as a seller.
        2. Navigate to the orders page.
        3. View the list of orders.
    - Expected Result:
        - The seller can view the list of orders.

### View order details
- Scenario 1: Successfully view order details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the orders page.
        3. Select an order to view.
        4. Click the "View Order" button.
    - Expected Result:
        - The seller can view the details of the selected order.
