import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

/*functions required for sorting of fields start here*/
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}
/*functions required for sorting of fields end here*/

/* Styles start here */
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.default
    }
  }
});
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#f2f2f2",
    color: "#4e4848",
    height: 30
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
/*Styles end here */

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;
    const headerRows = this.props.Row;
    return (
      <TableHead>
        <TableRow>
          {headerRows.map(row => {
            return (
              <CustomTableCell
                key={row.id}
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </CustomTableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "offerId"
  };
  handleRequestSort = (event, property) => {
    if (property === "offerName" || property === "offerId") {
      const orderBy = property;
      let order = "desc";

      if (this.state.orderBy === property && this.state.order === "desc") {
        order = "asc";
      }
      this.setState({ order, orderBy });
    }
  };

  render() {
    const { classes } = this.props;
    const { order, orderBy } = this.state;
    const rows = this.props.headingRows;
    const data = this.props.data;
    const _props = { ...this.props };
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              Row={this.props.headingRows}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))

                .map(n => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      className={classes.row}
                      key={n.offerId}
                    >
                      {rows.map(function(row) {
                        return (
                          <CustomTableCell key={row.id}>
                            {_props["get" + row.id + "CellContent"]
                              ? _props["get" + row.id + "CellContent"](
                                  n[row.id]
                                )
                              : n[row.id]}
                          </CustomTableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(EnhancedTable);
