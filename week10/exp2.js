const fs = require('fs');

console.log('=== Experiment 2: File System Operations ===');
console.log('Student: Mekala Anudeep (160124737118)\n');

const studentDetails = `Student Details
================
Name: Anudeep Mekala
Roll Number: 160124737118
Course: B.Tech Information Technology
Semester: 4th
Date: ${new Date().toLocaleDateString()}
`;

fs.writeFile('myData.txt', studentDetails, (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File "myData.txt" created successfully!');
    
    fs.readFile('myData.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('\n--- File Content ---');
        console.log(data);
        
        const newData = `\nAdditional Info:
================
Skills: JavaScript, Node.js, Express.js
Project: Completed Node.js experiments
Status: In Progress\n`;
        
        fs.appendFile('myData.txt', newData, (err) => {
            if (err) {
                console.log('Error appending data:', err);
                return;
            }
            console.log('✓ New data appended successfully!\n');
            
            fs.readFile('myData.txt', 'utf8', (err, updatedData) => {
                if (err) {
                    console.log('Error reading file:', err);
                    return;
                }
                console.log('--- Updated File Content ---');
                console.log(updatedData);
            });
        });
    });
});