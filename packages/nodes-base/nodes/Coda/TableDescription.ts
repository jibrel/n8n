import { INodeProperties } from 'n8n-workflow';

export const tableOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
			},
		},
		options: [
			{
				name: 'Create Row',
				value: 'createRow',
				description: 'Create/Upsert a row',
			},
			{
				name: 'Get Row',
				value: 'getRow',
				description: 'Get row',
			},
			{
				name: 'Get All Rows',
				value: 'getAllRows',
				description: 'Get all the rows',
			},
			{
				name: 'Delete Row',
				value: 'deleteRow',
				description: 'Delete one or multiple rows',
			},
		],
		default: 'createRow',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const tableFields = [

/* -------------------------------------------------------------------------- */
/*                                table:createRow                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Doc',
		name: 'docId',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getDocs',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'createRow',
				]
			},
		},
		description: 'ID of the doc.',
	},
	{
		displayName: 'Table',
		name: 'tableId',
		type: 'options',
		typeOptions: {
			loadOptionsDependsOn: [
				'docId',
			],
			loadOptionsMethod: 'getTables',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'createRow',
				]
			},
		},
		description: 'The table to create the row in.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'createRow',
				],
			},
		},
		options: [
			{
				displayName: 'Key Columns',
				name: 'keyColumns',
				type: 'string',
				default: '',
				description: `Optional column IDs, URLs, or names (fragile and discouraged),
				specifying columns to be used as upsert keys. If more than one separate by ,`,
			},
			{
				displayName: 'Disable Parsing',
				name: 'disableParsing',
				type: 'boolean',
				default: false,
				description: `If true, the API will not attempt to parse the data in any way.`,
			},
		]
	},

/* -------------------------------------------------------------------------- */
/*                                   table:get                                  */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Doc',
		name: 'docId',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getDocs',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getRow',
				]
			},
		},
		description: 'ID of the doc.',
	},
	{
		displayName: 'Table',
		name: 'tableId',
		type: 'options',
		typeOptions: {
			loadOptionsDependsOn: [
				'docId',
			],
			loadOptionsMethod: 'getTables',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getRow',
				]
			},
		},
		description: 'The table to get the row from.',
	},
	{
		displayName: 'Row ID',
		name: 'rowId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getRow',
				]
			},
		},
		description: `ID or name of the row. Names are discouraged because they're easily prone to being changed by users.
		If you're using a name, be sure to URI-encode it.
		If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected`,
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getRow',
				],
			},
		},
		options: [
			{
				displayName: 'Use Column Names',
				name: 'useColumnNames',
				type: 'boolean',
				default: false,
				description: `Use column names instead of column IDs in the returned output.</br>
				This is generally discouraged as it is fragile. If columns are renamed,</br>
				code using original names may throw errors.`,
			},
			{
				displayName: 'RAW Data',
				name: 'rawData',
				type: 'boolean',
				default: false,
				description: `Returns the data exactly in the way it got received from the API.`,
			},
			{
				displayName: 'ValueFormat',
				name: 'valueFormat',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Simple',
						value: 'simple',
					},
					{
						name: 'Simple With Arrays',
						value: 'simpleWithArrays',
					},
					{
						name: 'Rich',
						value: 'rich',
					},
				],
				description: `The format that cell values are returned as.`,
			},
		]
	},
/* -------------------------------------------------------------------------- */
/*                                   table:getAll                                  */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Doc',
		name: 'docId',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getDocs',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getAllRows',
				]
			},
		},
		description: 'ID of the doc.',
	},
	{
		displayName: 'Table',
		name: 'tableId',
		type: 'options',
		typeOptions: {
			loadOptionsDependsOn: [
				'docId',
			],
			loadOptionsMethod: 'getTables',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getAllRows',
				]
			},
		},
		description: 'The table to get the rows from.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getAllRows',
				]
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getAllRows',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'How many results to return.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'getAllRows',
				],
			},
		},
		options: [
			{
				displayName: 'Use Column Names',
				name: 'useColumnNames',
				type: 'boolean',
				default: false,
				description: `Use column names instead of column IDs in the returned output.</br>
				This is generally discouraged as it is fragile. If columns are renamed,</br>
				code using original names may throw errors.`,
			},
			{
				displayName: 'ValueFormat',
				name: 'valueFormat',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Simple',
						value: 'simple',
					},
					{
						name: 'Simple With Arrays',
						value: 'simpleWithArrays',
					},
					{
						name: 'Rich',
						value: 'rich',
					},
				],
				description: `The format that cell values are returned as.`,
			},
			{
				displayName: 'RAW Data',
				name: 'rawData',
				type: 'boolean',
				default: false,
				description: `Returns the data exactly in the way it got received from the API.`,
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Created At',
						value: 'createdAt',
					},
					{
						name: 'Natural',
						value: 'natural',
					},
				],
				description: `Specifies the sort order of the rows returned.
				If left unspecified, rows are returned by creation time ascending.`,
			},
			{
				displayName: 'Visible Only',
				name: 'visibleOnly',
				type: 'boolean',
				default: false,
				description: `If true, returns only visible rows and columns for the table.`,
			},
		]
	},
/* -------------------------------------------------------------------------- */
/*                                 row:delete                                 */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Doc',
		name: 'docId',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getDocs',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'deleteRow',
				]
			},
		},
		description: 'ID of the doc.',
	},
	{
		displayName: 'Table',
		name: 'tableId',
		type: 'options',
		typeOptions: {
			loadOptionsDependsOn: [
				'docId',
			],
			loadOptionsMethod: 'getTables',
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'deleteRow',
				]
			},
		},
		description: 'The table to delete the row in.',
	},
	{
		displayName: 'Row ID',
		name: 'rowId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'table',
				],
				operation: [
					'deleteRow',
				]
			},
		},
		description: 'Row IDs to delete.',
	},

] as INodeProperties[];
