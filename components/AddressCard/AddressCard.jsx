import "@/components/AddressCard/AddressCard.css";

const AddressCard = ({ data, onChange }) => {

  return (
    <div className="container">
      <h2>Shipping Details</h2>
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" value={data.fullName} onChange={onChange} required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={data.email} onChange={onChange} required />
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" value={data.phone} onChange={onChange} required />
      <label htmlFor="address">Address</label>
      <input type="text" name="address" value={data.address} onChange={onChange} required />
      <label htmlFor="city">City</label>
      <input type="text" name="city" value={data.city} onChange={onChange} required />
      <label htmlFor="zip">ZIP</label>
      <input type="text" name="zip" value={data.zip} onChange={onChange} required />
      <label htmlFor="country">Country</label>
      <input type="text" name="country" value={data.country} onChange={onChange} required />
    </div>
  );
};

export default AddressCard;