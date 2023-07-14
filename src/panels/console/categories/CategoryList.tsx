import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

function createData(name: string, description: string, slug: string, carbs: number) {
  return { name, description, slug, carbs };
}

const rows = [
  createData(
    "Fashion",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolore minima harum, similique inventore repellat.",
    "/fashion",
    24
  ),
  createData(
    "Smart Phone",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolore minima harum, similique inventore repellat.",
    "/smart-phone",
    37
  ),
  createData(
    "Watch",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolore minima harum, similique inventore repellat.",
    "/watch",
    24
  ),
  createData(
    "Gift Item",
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolore minima harum, similique inventore repellat.",
    "/gift",
    67
  )
];

const CategoryList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Description
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>
              Slag
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.slug}</TableCell>
              <TableCell align="center">
                <Button variant="contained">Edit</Button>
                <Button sx={{ ml: 2 }} variant="contained" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CategoryList;
