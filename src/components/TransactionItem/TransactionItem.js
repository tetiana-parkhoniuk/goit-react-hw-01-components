import PropTypes from 'prop-types';
import s from 'components/TransactionItem/TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.tableRow}>
      <td className={s.tableColumn}>{type}</td>
      <td className={s.tableColumn}>{amount}</td>
      <td className={s.tableColumn}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
