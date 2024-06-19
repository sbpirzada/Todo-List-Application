#! /usr/env code 
// CLI To-do List Application
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// console.log("\nWelcome to Shah Bano Pirzada - To-do List Applications.\n");
//Print Welcome Message
console.log(chalk.bold.rgb(284, 284, 284)(`\n  \t\t <<<==================================================>>>`));
console.log((chalk.bold.rgb)(284, 284, 284)(`<<<==========>>>  ${chalk.bold.hex(`$9999FF`)(`Welcome to \`Shah Bano Pirzada\` - Todo-List App`)}  <<<==========>>>`));
console.log(chalk.bold.rgb(284, 284, 284)(`\t\t <<<==================================================>>>\n`));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", 'Exit']
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
    ;
};
//Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} added successfully in Todo-List.`);
};
//Function to view all Todo-List
let viewTask = () => {
    console.log(`\n Your Todo-List: \n`);
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'Index Number' of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} task has been deleted successfully from your Todo-List.\n`);
};
//Function to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'Index Number' of the task you want to update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at Index Number ${update_task_index.index - 1} updated successfully []`);
};
main();
