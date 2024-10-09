# Todo List Application

## Description

This Todo List application is developed using React.js and utilizes local storage to persist tasks. Users can add, edit, mark tasks as completed, and delete tasks from their list. The application features a clean interface enhanced with Tailwind CSS for styling.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Edit Tasks**: Users can edit existing tasks.
- **Complete Tasks**: Users can mark tasks as completed or revert them back to incomplete.
- **Delete Tasks**: Users can remove tasks from the list.
- **Persistent Storage**: Tasks are stored in local storage, ensuring they persist across page reloads.

## Code Structure

### Main Components

1. **`TodoList`**: The main component that manages the state and functionality of the todo list.
2. **`Button`**: A reusable button component for interactive elements.
3. **`Card`**: A component used to structure and style the layout of the todo list.
4. **`Input`**: A component for handling user input.

### State

- **`newTask`**: A string representing the current task being added or edited.
- **`tasks`**: An array storing the list of tasks, initialized from local storage if available.
- **`editTaskId`**: Stores the ID of the task currently being edited.

### Main Functions

- **`useEffect`**: Updates local storage whenever the `tasks` state changes.
- **`handleAddTask`**: Handles the addition of a new task or saving changes to an existing task.
- **`handleCompletedTask`**: Toggles the completed status of a task.
- **`handleDeleteTask`**: Deletes a task based on its ID.
- **`startEditTask`**: Prepares a task for editing by setting the input field to the task's current name.
- **`saveEditTask`**: Saves changes to the task being edited.

## Usage

1. **Running the Application**: 
   - Clone this repository to your local machine.
   - Install all dependencies by running `npm install`.
   - Start the application with the command `npm start` and open it in `http://localhost:3000`.

2. **Adding Tasks**: 
   - Enter a task in the input field and click the "Add Task" button. If editing a task, the button text will change to "Save Task."

3. **Editing Tasks**: 
   - Click the "Edit" button on the task you want to modify. The task name will populate in the input field. Make changes and click "Save Task" to update it.

4. **Completing Tasks**: 
   - Click the "Completed" button to mark a task as completed. Click "Undo" to revert it back to incomplete.

5. **Deleting Tasks**: 
   - Click the "Remove" button to delete a task from the list.

## Local Storage

Tasks are saved in the browser's local storage to ensure persistence across sessions. The application retrieves the stored tasks when initialized.

## Contributing

Contributions are welcome! Please fork this repository and create a new branch for any features or fixes you want to add.

## License

This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for more details.
