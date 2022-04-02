import { ethers, BigNumber } from "ethers"
const ABI = require('../ABI.json')

interface State {
  contract: object,
  wallet: string,
  balance: string
  inputValue: number,
  errorInput: boolean,
}

export const connectModule = {
    state: ():State => ({
        contract: {},
        wallet: "",
        balance: "",
        inputValue: 0,
        errorInput: false,
    }),
    getters: {
        getInputValue(state:State):number {
          return state.inputValue
        },
        getError(state:State):boolean {
          return state.errorInput
        }
    },
    mutations: {
        setInput(state:State, value: number) {
          

        },
      },
    actions: {
      async fetchAccount({state, dispatch}: any):Promise<void> {
        if ((window as any).ethereum) {
          try {
            await dispatch("getWallet")

            const address = "0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C"
            const provider = new ethers.providers.Web3Provider((window as any).ethereum)
            //С помощью провайдера мы подключаемся к сети Blockcain
            const contract = new ethers.Contract(address, ABI, provider)
            state.contract = contract
            
            //Дает нам возможность читать view методы контракта
            const signer = provider.getSigner()
            state.wallet
            //Нужен для подтверждения транзакций
            const wallet = await signer.getAddress(); 
            state.wallet = wallet
            
         
            // Получить кошелек
            const balance = await provider.getBalance(wallet)
            state.balance = balance
            
            // Получить баланс кошелька
            
            // Получить адрес кошелька
            const contractSigner = contract.connect(signer)
            // Дают возможность выполнять транзакции 
          } catch (error) {
            console.log(error);
          }
          
        } else {
          alert("Please install metamask")
        }
      },
      async getWallet({state}: any):Promise<void> {
			  try {
          const accounts = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          state.wallet = accounts[0]
          console.log(accounts[0]);
          
        }  catch (error) {
          console.log(error);
        }
			
      },
    },
    namespaced: true
}