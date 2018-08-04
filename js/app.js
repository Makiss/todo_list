/*
Создать рабочий TODO список, 
который позволял бы создавать, отмечать выполненным, 
редактировать и удалять дела
*/

var completeTasksList = document.getElementById('completed-tasks');
var incompleteTasksList = document.getElementById('incomplete-tasks');

(function() {
	'use strict';
// 1.  Найти в разметке поле для ввода задачи,
//   кнопку добавления задачи,
//   оба списка выполненных и не выполненных задач.

	var newTaskField = document.getElementById('new-task');
	var newTaskButton = document.querySelector('.create');

// 8. Запуск программы, отрисовка всех задач, полученных с сервера
//  , если они есть
	var renderTodoList = function() {
		data.tasks.forEach(function(taskItem) {
			task.renderTask(taskItem);
		});
	};

	renderTodoList();
	newTaskButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log('clicked add task button');

		var taskDescription = newTaskField.value;
		taskDescription.length > 0 && task.createTask(taskDescription);
		newTaskField.value = '';
	});
})();