const table_name = 'deposite_types';

const table_fields = [
	'id',
	'type',
	'created_at',
	'updated_at'
];

/* type */
const TYPE_SAVING = 1;
const TYPE_SECURITY = 2;
const TYPE_DPS = 3;
const TYPE_FIXED = 4;

export {TYPE_SAVING, TYPE_SECURITY, TYPE_DPS, TYPE_FIXED};
export {table_name, table_fields};