import Profile from './components/Profile';
import user from './user.json';
import Statistics from 'components/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from 'components/FriendList';
import friends from './friends.json';
import TransactionHistory from 'components/TransactionsHistory';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <div key={user.tag}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <>
        <Statistics title="Upload stats" items={statisticalData} />
      </>

      <>
        <FriendList friends={friends} />
      </>

      <>
        <TransactionHistory items={transactions} />
      </>
    </>
  );
}
