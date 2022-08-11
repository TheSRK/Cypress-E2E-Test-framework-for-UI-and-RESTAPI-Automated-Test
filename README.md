application under test

task-1: https://store.briklshop.com/en/coffee%20mug

task-2: https://store.briklshop.com/en/store/salut-partners/

 # 🥅 Goals

1. Visit our Demo Product:
2. Implement automation test in the scenario below:
  a. “User try out the Studio Demo by changing mug color”
  - From Product page, user clicks on “Design Now” button to access the
studio page
  - Select the first pattern design
  - User changes mug color as following;
  Colorzone-1: Red,
  Colorzone-2: Orange

b. “User able to upload image and place on model”
  - From Product page, user clicks on “Design Now” button to access the
studio page
  - User upload image in Image Menu
  - Place it on model
  - Click edit placed image
  - Mirror horizontal placed image


 # ⚙️Setup

install node.js in your system (version >= 10)

Then run the following command from the terminal ```npm install npm --global```

Then run ```git clone https://github.com/TheSRK/brikl-assignments```

Then run ```cd {folder-name}``` to go inside the folder and then run ```npm install ```


 # ✔️Run tests

For headless mode in chrome run following command: 
  ```npm run cypress:run:task-1```
  ```npm run cypress:run:task-2```
  
To run all the specs in headed mode:```npm run cypress:open:all```


# Test Cases

Inside fixtures [test cases for Task-2](https://github.com/TheSRK/modern-ui-automation-using-cypress/blob/main/cypress/fixtures/Test%20Cases%20-%20brikl%20assignment%20.xlsx) can be found 
