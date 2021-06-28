import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionItem';
import s from 'components/TransactionsHistory/TransactionsHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.tableHeaderColumn}>Type</th>
          <th className={s.tableHeaderColumn}>Amount</th>
          <th className={s.tableHeaderColumn}>Currency</th>
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
