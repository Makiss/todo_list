var data = (function() {
	'use strict';

	var tasks = [
		{
			id: 1,
			description: 'Pay Bills',
			status: 'INCOMPLETE'
		},
		{
			id: 2,
			description: 'Go Shopping',
			status: 'INCOMPLETE'
		},
		{
			id: 3,
			description: 'See the Doctor',
			status: 'COMPLETE'
		}
	];

	return {
		tasks: tasks
	};
})();