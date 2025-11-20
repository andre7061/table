import { data } from '../data/data';
const getIndexMap = (data, value, key) =>
  data[value].reduce((acc, item) => {
    acc[item[key]] = {
      ...item,
      fullName: `${item.first_name} ${item.last_name}`,
    };
    return acc;
  }, {});

const indexSellers = getIndexMap(data, 'sellers', 'id');
const indexCustomers = getIndexMap(data, 'customers', 'id');

export const getCards = (data) =>
  data.reduce((acc, card) => {
    const customer = indexCustomers[card.customer_id];
    const seller = indexSellers[card.seller_id];
    if (customer && seller) {
      acc.push({
        ['date']: card.date,
        ['customer']: customer.fullName,
        ['seller']: seller.fullName,
        ['total']: card.total_amount,
      });
    } else {
      console.warn('Missing customer or seller for card:', card);
    }

    return acc;
  }, []);

