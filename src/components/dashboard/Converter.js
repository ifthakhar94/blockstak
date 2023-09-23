// pages/Converter.js

import { useState, useEffect } from "react";

const Converter = () => {
  const [usdtAmount, setUsdtAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState("");
  const [usdtToCurrencyRate, setUsdtToCurrencyRate] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedBitcoinType, setSelectedBitcoinType] = useState("bitcoin");

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedBitcoinType}&vs_currencies=${selectedCurrency}`
        );
        const data = await response.json();
        const rate = data[selectedBitcoinType][selectedCurrency];
        setUsdtToCurrencyRate(1 / rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [selectedCurrency, selectedBitcoinType]);

  const handleUsdtChange = (e) => {
    const amount = parseFloat(e.target.value);
    setUsdtAmount(amount);
    setBtcAmount(isNaN(amount) ? "" : (amount / usdtToCurrencyRate).toFixed(8));
  };

  return (
    <div>
      <h3 className="footer_card_title">Converter</h3>
      <div className="selector">
        <div>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            {/* Add more currency options here */}
          </select>
        </div>
        <div className="coin_selector">
          <select
            value={selectedBitcoinType}
            onChange={(e) => setSelectedBitcoinType(e.target.value)}
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="bitcoin-cash">Bitcoin Cash</option>
            <option value="litecoin">Litecoin</option>
            {/* Add more Bitcoin type options here */}
          </select>
        </div>
      </div>
      <input
        type="number"
        placeholder={`Enter amount in ${selectedCurrency.toUpperCase()}`}
        value={usdtAmount}
        onChange={handleUsdtChange}
      />
      <p>Result: {btcAmount}</p>
    </div>
  );
};

export default Converter;
