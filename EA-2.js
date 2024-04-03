/**
 * This program simulated a system of calculating salary and access to information of employee in a company by reading them from csv-file
 * @author Phu Hy Pham - ID: 3741975
 * Package used: 'csv-parser'
 */
const fs = require('fs');
const csv = require('csv-parser'); //import the package to read csv file
const prompt = require('prompt-sync')();

/**
 * 
 * @param {The total time of work in week of employee} workTime 
 * @param {The hourly rate/pay} hourlyRate 
 * @param {The number of times they turn up at company late} lateTime 
 * @returns 
 */
function getTotalSalary(workTime, hourlyRate, lateTime) {
    let pay = 0;
    if (workTime <= 40) {
        pay += workTime * hourlyRate;
    } else {
        pay += (40 * hourlyRate) + ((workTime - 40) * hourlyRate * 1.5);
    }
    if (lateTime > 0) {
        pay -= 5.5 * lateTime;
    }
    pay -= pay * 0.15;
    return pay;
}

console.log("+----------------------------------------+");
console.log("| WELCOME TO SYSTEM OF EMPLOYEE TRACKING |");
console.log("+----------------------------------------+");


let data = []; // create a data list to store rows' information from the file.

let file_name = prompt('-> Enter the name of the file (file-name.csv): '); //ask for the file name

/**
 * Traverse through the file with matched name
 */
fs.createReadStream(file_name)
    .pipe(csv())
    .on('data', (row) => {
        data.push(row); //insert the information to data list
    })
    .on('end', () => {
        let choice;

        do {
            console.log("\n\n Menu"); //A menu of activities in the system.
            console.log("=================================");
            console.log("1. Get employee information card.");
            console.log("2. Get salary manifest.");
            console.log("3. Get employee information list.");
            console.log("4. Quit.");
            console.log("=================================");

            choice = parseInt(prompt('-> Enter: '));

            switch (choice) {
                case 1: //Return a card contains specific employee's information by checking name and ID
                    console.log("\n\n");
                    let employeeName = prompt('-> Enter the name of the employee: ');
                    let employeeID = prompt('-> Enter employee ID: ');
                    let found = false;
                
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].Name === employeeName && data[i].Id === employeeID) {
                            const line1 = "\t+-----------------------------------------+";
                            const title = "\t|          Employee Information           |";
                            const line = "\t+-----------------------------------------+";
                            const name = "\t|-Name of employee: " + employeeName.padEnd(22) + "|";
                            const age = "\t|-Age: " + data[i].Age.padEnd(35) + "|";
                            const phone = "\t|-Phone Number: " + data[i].Phone_number.padEnd(26) + "|";
                            const id = "\t|-ID Number: " + employeeID.toString().padEnd(29) + "|";
                            const job = "\t|-Position: " + data[i].Position.padEnd(30) + "|";
                            const email = "\t|-Email: " + data[i].Email.padEnd(33) + "|";
                            const year = "\t|-Year activate: " + data[i].Year_Active.padEnd(25) + "|";
                            const line2 = "\t+-----------------------------------------+";

                            //Those information including name, age, ID, position in company, email, phone number, year start working

                            console.log(line1);
                            console.log(title);
                            console.log(line);
                            console.log(name);
                            console.log(age);
                            console.log(phone);
                            console.log(id);
                            console.log(job);
                            console.log(email);
                            console.log(year);
                            console.log(line2);
                            console.log("\n");

                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log("Employee not found.");
                    }
                    break;

                case 2: //return the salary that employees receive and users can choose to print them under a .txt file
                    console.log("\n\n");
                    let question = prompt('-> Do you want to print it out as a file (Y or N)?: ');

                    if (question.toLowerCase() === 'y') {
                        let output_file = prompt('-> Enter the name of exported file (name.txt): ');
                        let file_export = fs.createWriteStream(output_file);

                        file_export.write("=================   =========   ========================   =============   =========   ============\n");
                        file_export.write("Name of employees   ID number   Position in company        hours at work   Late time   Total Salary\n");
                        file_export.write("=================   =========   ========================   =============   =========   ============\n");

                        for (let i = 0; i < data.length; i++) {
                            const hourlyRate = parseFloat(data[i].Hourly_rate);
                            const hours = parseFloat(data[i].Total_time);
                            const late = parseFloat(data[i].Late_time);
                            const salary = getTotalSalary(hours, hourlyRate, late);

                            const formattedName = data[i].Name.padEnd(20);
                            const formattedID = data[i].Id.padEnd(9);
                            const formattedPosition = data[i].Position.padEnd(27);
                            const formattedHours = (data[i].Total_time + " hours").padEnd(16);
                            const formattedLateTime = data[i].Late_time.toString().padEnd(12);

                            const salaryFormatted = "$" + salary.toFixed(2);

                            file_export.write(formattedName  + formattedID + "\t" + formattedPosition + formattedHours + formattedLateTime + salaryFormatted + "\n");
                        }
                        console.log("Data exported to file: " + output_file);
                        file_export.close(); // Close the file stream
                    } else {
                        console.log("Operation aborted.\n");

                        console.log("=================   =========   ========================   =============   =========   ============\n");
                        console.log("Name of employees   ID number   Position in company        hours at work   Late time   Total Salary\n");
                        console.log("=================   =========   ========================   =============   =========   ============\n");

                        for (let i = 0; i < data.length; i++) {
                            const hourlyRate = parseFloat(data[i].Hourly_rate);
                            const hours = parseFloat(data[i].Total_time);
                            const late = parseFloat(data[i].Late_time);
                            const salary = getTotalSalary(hours, hourlyRate, late);

                            const formattedName = data[i].Name.padEnd(20);
                            const formattedID = data[i].Id.padEnd(9);
                            const formattedPosition = data[i].Position.padEnd(27);
                            const formattedHours = (data[i].Total_time + " hours").padEnd(16);
                            const formattedLateTime = data[i].Late_time.toString().padEnd(12);

                            const salaryFormatted = "$" + salary.toFixed(2);
                            console.log(formattedName  + formattedID + "\t" + formattedPosition + formattedHours + formattedLateTime + salaryFormatted + "\n" );
                        }
                    }
                    break;

                case 3: //return all employees personal information 
                    console.log("\nEMPLOYEE INFORMATION LIST:\n");

                    console.log("=================   =========   ========================   ====   ==========================   =================   ===========\n");
                    console.log("Name of employees   ID number   Position in company        Age    Company Email                Phone number        Year active\n");
                    console.log("=================   =========   ========================   ====   ==========================   =================   ===========\n");

                    for (let i = 0; i < data.length; i++) {
                        const formattedName = data[i].Name.padEnd(20);
                        const formattedID = data[i].Id.padEnd(12);
                        const formattedPosition = data[i].Position.padEnd(27);
                        const formattedAge = data[i].Age.padEnd(7);
                        const formattedEmail = data[i].Email.padEnd(29);
                        const formattedPhone = data[i].Phone_number.padEnd(20);
                        const formattedyear = data[i].Year_Active;

                        console.log(formattedName  + formattedID + formattedPosition + formattedAge + formattedEmail + formattedPhone + formattedyear + "\n" );

                    }
                    break;

                case 4: //Exit the program
                    console.log("Exiting program.");
                    break;

                default: //When a choice does not in the menu, process to choose again
                    console.log("Invalid choice. Please enter a number between 1 and 4.");
            }
        } while (choice !== 4); //return to the menu when finishing activity
    });