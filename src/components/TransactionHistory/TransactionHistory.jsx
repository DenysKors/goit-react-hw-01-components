import PropTypes from 'prop-types';
import { Transaction } from 'components/TransactionHistory/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
