import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classes["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((i) => (
          <tr key={i.year}>
            <td>{i.year}</td>
            <td>{formatter.format(i.savingsEndOfYear)}</td>
            <td>{formatter.format(i.yearlyInterest)}</td>
            <td>
              {formatter.format(
                i.savingsEndOfYear -
                  props.initialInvestment -
                  i.yearlyContribution * i.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + i.yearlyContribution * i.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
