import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} ID`,
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Last Name`,
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => format(new Date(value), 'dd/MM/yyyy'),
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Birthday`,
  },
  {
    Header: 'Country',
    accessor: 'country',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Country`,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    aggregate: 'count',
    Aggregated: ({ value }) => `${value} Phone Num.`,
  },
];
