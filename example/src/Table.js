import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spotlight from "rc-spotlight";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: 20
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const ColArr = ["Name", "Calories", "Fat", "Carbs", "Protein"];

export default function SimpleTable() {
  const classes = useStyles();

  const [backdropIndex, setBackdropIndex] = useState(0);

  const [spotRows, setSpotRows] = useState([0, 1, 2, 3, 4, 5]);
  const [spotCols, setSpotCols] = useState(["Name"]);

  // useEffect(() => {
  //   setInterval(function() {
  //     setBackdropIndex(backdropIndex =>
  //       backdropIndex === 5 ? 1 : backdropIndex + 0
  //     );
  //     setSpotCols(spotCols => {
  //       // console.log("spotCols[0] : ", spotCols[0]);
  //       const curIndex = ColArr.indexOf(spotCols[0]);
  //       // console.log("curIndex : ", curIndex);
  //       const newIndex = curIndex === 5 ? 0 : curIndex + 1;
  //       // console.log(ColArr[+newIndex]);
  //       return [ColArr[+newIndex]];
  //     });
  //   }, 2500);
  // }, []);

  const focusSpotlight = ({ row, col }, { spotRows, spotCols }) =>
    spotRows.includes(row) && spotCols.includes(col);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Spotlight
              isActive={focusSpotlight(
                { row: 0, col: "Name" },
                { spotRows, spotCols }
              )}
              inheritParentBackgroundColor
            >
              <TableCell>Dessert (100g serving)</TableCell>
            </Spotlight>
            <Spotlight
              isActive={focusSpotlight(
                { row: 0, col: "Calories" },
                { spotRows, spotCols }
              )}
              inheritParentBackgroundColor
            >
              <TableCell align="right">Calories</TableCell>
            </Spotlight>
            <Spotlight
              isActive={focusSpotlight(
                { row: 0, col: "Fat" },
                { spotRows, spotCols }
              )}
              inheritParentBackgroundColor
            >
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </Spotlight>
            <Spotlight
              isActive={focusSpotlight(
                { row: 0, col: "Carbs" },
                { spotRows, spotCols }
              )}
              inheritParentBackgroundColor
            >
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            </Spotlight>
            <Spotlight
              isActive={focusSpotlight(
                { row: 0, col: "Protein" },
                { spotRows, spotCols }
              )}
              inheritParentBackgroundColor
            >
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </Spotlight>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.name}>
              <Spotlight
                isActive={focusSpotlight(
                  { row: i + 1, col: "Name" },
                  { spotRows, spotCols }
                )}
                inheritParentBackgroundColor
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </Spotlight>

              <Spotlight
                isActive={focusSpotlight(
                  { row: i + 1, col: "Calories" },
                  { spotRows, spotCols }
                )}
                inheritParentBackgroundColor
              >
                <TableCell align="right">{row.calories}</TableCell>
              </Spotlight>

              <Spotlight
                isActive={focusSpotlight(
                  { row: i + 1, col: "Fat" },
                  { spotRows, spotCols }
                )}
                inheritParentBackgroundColor
              >
                <TableCell align="right">{row.fat}</TableCell>
              </Spotlight>

              <Spotlight
                isActive={focusSpotlight(
                  { row: i + 1, col: "Carbs" },
                  { spotRows, spotCols }
                )}
                inheritParentBackgroundColor
              >
                <TableCell align="right">{row.carbs}</TableCell>
              </Spotlight>

              <Spotlight
                isActive={focusSpotlight(
                  { row: i + 1, col: "Protein" },
                  { spotRows, spotCols }
                )}
                inheritParentBackgroundColor
              >
                <TableCell align="right">{row.protein}</TableCell>
              </Spotlight>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
