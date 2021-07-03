import PropTypes from 'prop-types';
import styles from 'components/TransactionItem/TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableColumn}>{type}</td>
      <td className={styles.tableColumn}>{amount}</td>
      <td className={styles.tableColumn}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
