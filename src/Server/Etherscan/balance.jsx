import { ETHERSCAN_API_BASE_URL, ETHERSCAN_API_KEY } from './config'; // Asegúrate de tener este archivo con tus configuraciones

// Función para obtener el balance de un token para una dirección específica
const getTokenBalance = async (contractAddress, address) => {
  const url = `${ETHERSCAN_API_BASE_URL}?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.result/10**18;
    const formattedBalance = result.toFixed(6);


    return formattedBalance.toString();
  } catch (error) {
    console.error('Error fetching token balance:', error);
  }
};

export default getTokenBalance;