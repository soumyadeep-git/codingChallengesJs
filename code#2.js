/*1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

const markWeight = 78;
const markHeight = 1.69;
const johnHeight = 92;
const johnWeight = 1.95;
const BMImark = markWeight / (markHeight * markHeight);
const BMIjohn = johnWeight / (johnHeight * johnHeight);
if (BMIjohn > BMImark) {
    console.log("John has a higher BMI i.e, " + BMIjohn);
}
else {
    console.log("Mark has a higher BMI i.e, " + BMImark);
}
