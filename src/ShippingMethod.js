import React from 'react';
import { useParams } from 'react-router-dom';

const shippingMethods = [
  { code: "ECO", name: "Economic delivery", description: "You will receive the goods in 5-6 days", price: 3.00 },
  { code: "STD", name: "Standard delivery", description: "You will receive the goods in 3-4 days", price: 5.00 },
  { code: "EXP", name: "Express delivery", description: "You will receive the goods in 1 day", price: 8.00 }
];

export default function ShippingMethod() {
  const { code } = useParams();
  const shippingMethod = shippingMethods.find(sm => sm.code === code);

  if (!shippingMethod) {
    return <div><h2>Shipping method not found</h2></div>;
  }

  return (
    <div>
      <h2>{shippingMethod.name}</h2>
      <p>{shippingMethod.description}</p>
      <p>Price: {shippingMethod.price}</p>
    </div>
  );
}
