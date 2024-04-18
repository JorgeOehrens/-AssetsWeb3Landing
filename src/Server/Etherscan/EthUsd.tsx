const getEthPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const data = await response.json();
      return data.ethereum.usd;  // Devuelve el precio de ETH en USD
    } catch (error) {
      console.error('Error fetching ETH price:', error);
      return null;  // Manejo de errores
    }
  };

  export default getEthPrice;