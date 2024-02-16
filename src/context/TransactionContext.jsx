import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';


export const TransactionContext = React.createContext();

const { ethereum} = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
  };

export const TransactionProvider = ({children}) => {
    const [currentAccount,setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addressTo:'', amount: '',  message:'', keyword: ''});

    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    

    const getAllTransactions = async () => {
      try {
        if (ethereum) {
          const transactionContract = createEthereumContract();
    
          // Obtener la dirección del usuario actual
          const accounts = await ethereum.request({ method: 'eth_accounts' });
          const currentAccount = accounts[0];
    
          const availableTransactions = await transactionContract.getAllTransactions();
    
          const structuredTransactions = availableTransactions.filter((transaction) => {
            // Verificar si la dirección del remitente o destinatario es igual a la dirección del usuario actual
            return transaction.sender.toLowerCase() === currentAccount.toLowerCase() || transaction.receiver.toLowerCase() === currentAccount.toLowerCase();
          }).map((transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / (10 ** 18)
          }));
    
          setTransactions(structuredTransactions);
        } else {
          console.log("Ethereum is not present");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };
    const checkIfTransactionsExists = async () => {
        try {
          if (ethereum) {
            const transactionContract = createEthereumContract();
            const currentTransactionCount = await transactionContract.getTransactionCount();
    
            window.localStorage.setItem("transactionCount", currentTransactionCount);
          }
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };
    

    const connectWallet = async ()=>{
        try {
            if(!ethereum) return alert ("Porfavor instalar metamask");
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(accounts[0]);




        } catch (error) {
            console.log(error);
            throw new Error("No es objeto de Ethereum");


        }
    }
    const sendTransaction = async () => {
        try {
          if (ethereum) {
            const {  amount, message } = formData;
            const addressTo = '0xa20b60Ef1fd2D56e7F3F891894D4b50dC46D817d';
            const keyword = 'Hacienda Guay Guay'
            const transactionContract = createEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
    
            await ethereum.request({
              method: "eth_sendTransaction",
              params: [{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208",
                value: parsedAmount._hex,
              }],
            });
    
            const transactionHash = await transactionContract.addBlockchain(addressTo, parsedAmount, message,keyword);
    
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount (transactionCount.toNumber());
          } else {
            console.log("No ethereum object");
          }
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

    useEffect(() => {
        checkIfWalletIsConnect();
        checkIfTransactionsExists();

    }, [transactionCount]
    
    );
    return (
        <TransactionContext.Provider value= {{transactionCount,connectWallet , currentAccount, formData, setFormData,handleChange, sendTransaction,transactions, isLoading}}> 
            {children}

        </TransactionContext.Provider>
    );
}