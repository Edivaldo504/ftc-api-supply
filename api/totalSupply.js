import axios from 'axios';

export default async function handler(req, res) {
  const contractAddress = '0x815f57b7153d7A04F279eA3724dA6F6fD177fBf3';
  const apiKey = process.env.ETHERSCAN_API_KEY;

  const url = `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const supply = response.data.result;
    const readableSupply = Number(supply) / 10 ** 18;

    res.status(200).send(readableSupply.toString());
  } catch (error) {
    res.status(500).send('Erro ao buscar totalSupply');
  }
}
