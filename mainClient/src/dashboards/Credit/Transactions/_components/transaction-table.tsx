/* eslint-disable @typescript-eslint/no-explicit-any */
 
import * as React from 'react';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const rows: any[] = [
    { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'silver' },
    { brand: 'Honda', model: 'Civic', year: 2019, color: 'blue' },
    { brand: 'Ford', model: 'Mustang', year: 2021, color: 'red' },
    { brand: 'Chevrolet', model: 'Camaro', year: 2018, color: 'black' },
    { brand: 'BMW', model: 'X5', year: 2022, color: 'white' },
    { brand: 'Mercedes-Benz', model: 'E-Class', year: 2017, color: 'gray' },
    { brand: 'Ford', model: 'Mustang', year: 2021, color: 'red' },
    { brand: 'Chevrolet', model: 'Camaro', year: 2018, color: 'black' },
    { brand: 'BMW', model: 'X5', year: 2022, color: 'white' },
    { brand: 'Mercedes-Benz', model: 'E-Class', year: 2017, color: 'gray' },
    { brand: 'Mercedes-Benz', model: 'E-Class', year: 2017, color: 'gray' },
    { brand: 'Ford', model: 'Mustang', year: 2021, color: 'red' },
    { brand: 'Chevrolet', model: 'Camaro', year: 2018, color: 'black' },
    { brand: 'BMW', model: 'X5', year: 2022, color: 'white' },
    { brand: 'Mercedes-Benz', model: 'E-Class', year: 2017, color: 'gray' },
  ];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const headers: any[] = Object.keys(rows[0])

function labelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function TableHead() {
    return (
        <thead>
            <tr>
                {Object.keys(rows[0]).map((header, key) => {
                    return (
                    <th key={key}>
                        <h2 className='text-lg w-auto'>
                            {header.charAt(0).toUpperCase() + header.slice(1)}
                        </h2>
                    </th>
                    )
                })}
                {/* <th></th>
                <th></th> */}
            </tr>
        </thead>
    );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 1,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: 'background.level1',
        }),
        borderTopLeftRadius: 'var(--unstable_actionRadius)',
        borderTopRightRadius: 'var(--unstable_actionRadius)',
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
        >
          Member Applicants
        </Typography>
      )}
    </Box>
  );
}

interface Table {
    column: number
}
export default function TransactionTable({
    column
}: Table) {
  const [order,] = React.useState<Order>('asc');
  // order by header name hgere
  const [orderBy,] = React.useState(headers[1].toString());
  const [selected, setSelected] = React.useState<readonly string[]>([]);

//   page index
  const [page, setPage] = React.useState(0);

//   row per page
  const [rowsPerPage] = React.useState(10);

  // select rows
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };


  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? rows.length
      : Math.min(rows.length, (page + 1) * rowsPerPage);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Sheet
      variant="outlined"
      sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm', }}
    >
      <EnhancedTableToolbar numSelected={selected.length} />
      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          '--TableCell-headBackground': 'transparent',
          '--TableCell-selectedBackground': (theme) =>
            theme.vars.palette.success.softBg,
          '& thead th:nth-of-type(1)': {
            width: '30%',
          },
        }}
      >
        <TableHead />
        <tbody>
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index1) => {
                const stringIndex: string = index1.toString();
              const isItemSelected = isSelected(stringIndex);
              const labelId = `enhanced-table-checkbox-${index1}`;

              return (
                <tr
                  onClick={(event) => {handleClick(event, stringIndex)}}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index1}
                  style={
                    isItemSelected
                      ? ({
                          '--TableCell-dataBackground':
                            'var(--TableCell-selectedBackground)',
                          '--TableCell-headBackground':
                            'var(--TableCell-selectedBackground)',
                        } as React.CSSProperties)
                      : {}
                  }
                >
                    {Object.values(row).map((column, index) => (
                        (index === 0) 
                        ? (
                            <td id={labelId} key={index} scope='row' className='font-semibold cursor-pointer hover:underline'  onClick={(e) => {e.stopPropagation(); alert(2)}}>
                                {column}
                            </td>
                        ) : (
                            <td key={index} >
                                {column}
                            </td>
                        )
                    ))}
                {/* <td>
                    <Button size="sm" variant="plain" color="neutral" onClick={(e) => {e.stopPropagation(); alert(24)}}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button size="sm" variant="soft" color="danger" onClick={(e) => {e.stopPropagation(); alert(245)}}>
                      Delete
                    </Button>

                  </td> */}
                </tr>
              );
             })}


            {/* EMPTY ROWS */}
          {emptyRows > 0 && (
            <tr
              style={
                {
                  height: `calc(${emptyRows} * 40px)`,
                  '--TableRow-hoverBackground': 'transparent',
                } as React.CSSProperties
              }
            >
              <td colSpan={column} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={column}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  justifyContent: 'flex-end',
                }}
              >
                <Typography textAlign="center" sx={{ minWidth: 80 }}>
                  {labelDisplayedRows({
                    from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                    to: getLabelDisplayedRowsTo(),
                    count: rows.length === -1 ? -1 : rows.length,
                  })}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      rows.length !== -1
                        ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}
