const customLogger = (state) => (next) => (action) => {
	console.log('state', state);
	console.log('action', action);
	return next();
};

export {customLogger};
