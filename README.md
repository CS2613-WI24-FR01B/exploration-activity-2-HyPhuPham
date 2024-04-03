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
- **Developer**: David Worms, a software engineer

### To use
* On the terminal - we first use the command line :

      npm install csv-parser

* On the program (JavaScript)- we import them using the command line:

      const fs = require('fs');
      const csv = require('csv-parser');
  
### Some of the basic widgets
* CSV File Uploader: Allows users to upload CSV files through a file input widget, parse the file, and export data row by row.
* CSV Data Filter: Create a function where users ability to export data from a web application.
* CSV Data Importer: Build a widget that allows users to import CSV data into a web application.
* CSV to JSON Converter: Create a convert function to paste CSV data into a text area.

### Syntax

      let data = [];
      
      fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', () => {
          console.log(data);
        });

 - We use the 

