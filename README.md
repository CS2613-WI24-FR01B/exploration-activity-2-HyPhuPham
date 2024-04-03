[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RPDAFNpj)
# EA2

## EMPLOYEE TRACKING SYSTEM
This program simulated a system to manage employees' personal information and salary in a company and print them as a manifest.

- **Programming language use:** Javascript
- **Package use:** csv-parser
- **Reason:** This package provides a helper method for programmers to traverse and gain data in the .csv file instead of building another program.

- Learning this package supports me in forming an idea in data science and how to work with data from a .csv file beside a normal text file.
- Using csv-parser in Javascript language similar to Java brings me experience in both languages and helps me work with data.

## About the 'csv-parser' package
- **Definition:** The csv-parser is a Node.js package module designed to parse CSV data. It allows programmers to easily convert them into JavaScript objects or arrays.
- **Year of release** : 2010
- **Developer**: David Worms, a software engineer who contributes a lot in developing libraries for JavaScript.

### To use
* On the terminal - we first use the command line :

      npm install csv-parser

* On the program (JavaScript)- we import them using the command line:

      const fs = require('fs');
      const csv = require('csv-parser');
  
### Some of the basic widgets
* **CSV File Uploader:** Allows users to upload CSV files through a file input widget, parse the file, and export data row by row.
* **CSV Data Filter:** Create a function where users ability to export data from a web application.
* **CSV Data Importer:** Build a widget that allows users to import CSV data into a web application.
* **CSV to JSON Converter:** Create a convert function to paste CSV data into a text area.

### Syntax (Example)
- The syntax of the **csv-parser** package is simplify and easy to interact with.

      let data = [];
      
      fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', () => {
          console.log(data);
        });

 - First, we initialize a 'data' array.
 - We use fs.createReadStream('data.csv')  to read the CSV file.
 - In the parameter, we can use any file name (CSV file).
 - The 'csv-parser' now starts to parse through the assigned CSV file by each row and emits a 'data' event with the parsed row.
 - Then we push each row in the 'data' array.
 - After all the rows are processed, the 'end' event is emitted.
 - Finally, log data to the console and display them.

 - In the case we want to export only in a specific column, we can use a for loop.
   
            let data = [];
            
            fs.createReadStream('data.csv')
              .pipe(csv())
              .on('data', (row) => {
                // Process each row of data
                data.push(row);
              })
              .on('end', () => {
                // Iterate through each row using a for loop and print out the company name
                for (let i = 0; i < data.length; i++) {
                  console.log(data[i].header);
                }
              });

- In this case, the for loop loops through the 'data' array and get the data in each index of that column, distinguished by the header of the column.
  
# Note: TO RUN
 * Step 1: Open the terminal
 * Step 2: Traverse to the folder where the code at (use: "cd <folder_name>")
 * Step 3: Use the command line: node <file_name>.js

# References
[1] https://www.npmjs.com/package/csv-parse
[2] https://csv.js.org/parse/

# Program Sample Output

## Menu options - Greeting lines and asking for the CSV file need to process.

![Menu](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/b2c2e0f2-0585-4a46-a18f-7a4f580bb470)

## Option 1 - Get the personal information of a specific employee.

![activity1](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/9dbd7fbd-f12d-4c17-b6eb-9b5071e45d89)

## Option 2 - Calculate the total salary of each employee (choose to print the manifest file or not).

![activity2-yes](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/ab87f413-dbc5-4f1a-b46e-6d20da9a3019)

![activity2-No](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/a043d8fc-abea-4bdf-b64b-eb69d8d74a52)

![Output-file](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/db541856-4781-48d7-b1aa-e02d206867ac)

## Option 3 - Return the manifest of employees' data.

![activity3](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/5eb3d736-76eb-4cf3-b15b-40f6d92350fe)

## Option 4 - Exit the program.

![activity4](https://github.com/CS2613-WI24-FR01B/exploration-activity-2-HyPhuPham/assets/114414645/1f2d68ab-f6f7-4322-b1d2-bbdca3732f0a)


