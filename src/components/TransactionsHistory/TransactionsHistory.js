import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionItem';
import styles from 'components/TransactionsHistory/TransactionsHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableHeaderColumn}>Type</th>
          <th className={styles.tableHeaderColumn}>Amount</th>
          <th className={styles.tableHeaderColumn}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
