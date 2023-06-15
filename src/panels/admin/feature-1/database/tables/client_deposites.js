const table_name = 'client_deposites';

const table_fields = [
	'id',
	'client_id',
	'location_id',
	'area_id',
	'deposite_taken_by',
	'deposite_type',
	'in_out',
	'status',
	'amount',
	'description',
	'attachment_id',
	'authorized_by',
	'created_at',
	'updated_at'
];

/* in_out */
const IN_OUT_ACCEPT = 1;
const IN_OUT_REFUND = 2;
/* status */
const STATUS_RECEIVE = 1;
const STATUS_PENDING = 2;
const STATUS_COMPLETE = 3;
const STATUS_REJECTED = 4;
const STATUS_REFUND = 5;

export {IN_OUT_ACCEPT, IN_OUT_REFUND};
export {STATUS_RECEIVE, STATUS_PENDING, STATUS_COMPLETE, STATUS_REJECTED, STATUS_REFUND};
export {table_name, table_fields};