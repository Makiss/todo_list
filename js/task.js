var task = (function() {
	'use strict';

	// 2. Создать функцию, которая будет создавать задачу.
	var createTask = function(taskDescription) {
		console.log('Task ' + taskDescription + ' created');

		var task = {
			id: data.tasks.length + 1,
			description: taskDescription,
			status: constants.INCOMPLETE_TASK
		};

		data.tasks.push(task);
		renderTask(task);
	};
// 3. Создать функцию, которая будет отрисовывать задачу:
	var renderTask = function(task) {
//  - создание элементов
		var taskItem = document.createElement('li');
		taskItem.dataset.id = task.id;
		var documentFragment = document.createDocumentFragment();

		var taskCheckbox = document.createElement('input');
		taskCheckbox.setAttribute('type', 'checkbox');
		task.status === constants.COMPLETE_TASK 
			&& taskCheckbox.setAttribute('checked', 'true');
		taskCheckbox.addEventListener('change', function(evt) {
			evt.preventDefault();

			var listItem = this.parentNode;
			var list = listItem.parentNode;
			var listId = list.id;
			var newTaskStatus;
			var listToAppendTask;

			if (listId === 'incomplete-tasks') {
				listToAppendTask = completeTasksList;
				newTaskStatus = constants.COMPLETE_TASK;
			} else {
				listToAppendTask = incompleteTasksList;
				newTaskStatus = constants.INCOMPLETE_TASK;
			}

			toggleTaskStatus(listItem, newTaskStatus, listToAppendTask);
		});
		documentFragment.appendChild(taskCheckbox);

		var taskLabel = document.createElement('label');
		taskLabel.innerText = task.description;
		documentFragment.appendChild(taskLabel);

		var taskEditInput = document.createElement('input');
		taskEditInput.setAttribute('type', 'text');
		documentFragment.appendChild(taskEditInput);

		var editButton = document.createElement('button');
		editButton.setAttribute('type', 'button');
		editButton.classList.add('edit');
		editButton.innerText = 'Edit';
		editButton.addEventListener('click', editTask);
		documentFragment.appendChild(editButton);

		var deleteButton = document.createElement('button');
		deleteButton.setAttribute('type', 'submit');
		deleteButton.classList.add('delete');
		deleteButton.innerText = 'Delete';
		documentFragment.appendChild(deleteButton);

		taskItem.appendChild(documentFragment);
		task.status === constants.COMPLETE_TASK 
			? completeTasksList.appendChild(taskItem)
			: incompleteTasksList.appendChild(taskItem)
//  - навешивание обработчиков событий
//  - прикрепить задачу к соответствующему списку
	};
// 4. Создать функцию, которая будет помечать выполнение 
//   или невыполнение задачи.
	var toggleTaskStatus = function(listItem, newTaskStatus, listToAppendTask) {
		console.log('Task status changed');

		var taskId = listItem.dataset.id;

		listToAppendTask.append(listItem);
		data.tasks = data.tasks.map(function(task) {
			task.status = task.id === taskId 
				? newTaskStatus
				: task.status;
			
			return task;
		});
	};
// 5. Создать функцию, которая будет редактировать задачу.
	var editTask = function(evt) {
		evt.preventDefault();
		console.log('Task edited');

		var listItem = this.parentNode;
		var taskId = listItem.dataset.id;
		var task = data.tasks.find(function(task) {
			return task.id === Number(taskId);
		});
		var textInput = listItem.querySelector('input[type="text"]');
		textInput.value = task.description;
		listItem.classList.toggle('editMode');
	};
// 6. Создать функцию, которая будет сохранять задачу.
	var saveTask = function() {
		console.log('Task saved');
	};
// 7. Создать функцию, которая будет удалять задачу.
	var removeTask = function() {
		console.log('Task removed');
	};

	return {
		renderTask: renderTask,
		createTask: createTask
	};
})();