import "@/components/PaymentCard/PaymentCard.css";

const PaymentCard = ({ data, onChange }) => {

  return (
    <div className="container">
      <h2>Payment Info</h2>
      <label htmlFor="cardholder">Cardholder Name</label>
      <input type="text" name="cardholder" value={data.cardholder} onChange={onChange} required />
      <label htmlFor="cardnumber">Card Number</label>
      <input type="text" name="cardnumber" value={data.cardnumber} onChange={onChange} required />
      <label htmlFor="expiry">Expiry</label>
      <input type="month" name="expiry" value={data.expiry} onChange={onChange} required />
      <label htmlFor="cvv">CVV</label>
      <input type="number" name="cvv" value={data.cvv} onChange={onChange} required />
    </div>
  );
};

export default PaymentCard;