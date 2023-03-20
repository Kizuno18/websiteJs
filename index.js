import axios from 'axios';

const headers = {
  'cookie': 'visitorId=49a20b85-7adb-4869-91af-2e12bff02339; token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2xpdmVwaXguZ2ciLCJpYXQiOjE2Nzg1NDAwNzYsImlzcyI6Imh0dHBzOi8vbGl2ZXBpeC5nZyIsInNlc3Npb24iOiI2NDBjN2QyY2YwOWY3MTA0MmE0ZDlmZWMiLCJzdWIiOiI2MmYxNzQ3YTVhOTkyZWNkNGUwYzE0ZDUifQ.QENxFIMpx9dED0MfBMkBH-cx3vLSwNQsIz1JOysB2OF8mrS4zLqxmv9X42vwGjfRCIMZ8QgEJ29FOTSgQxSLgmwZgQVajEjYuFnNhCRf44FjNNBeGasqVRFyKrveVn9Hnt-gTSoPiUxBs-clzL97n8hf1dq6mfmGmIPUo0mfmvQ',
  'authority': 'webservice.livepix.gg',
  'path': '/wallet',
  'scheme': 'https',
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'origin': 'https://dashboard.livepix.gg',
  'referer': 'https://dashboard.livepix.gg/',
  'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
};


    try {
      const { data: { balance } } = await axios.get('https://webservice.livepix.gg/wallet', { headers });
      console.log(`O saldo é ${balance}`);
      //message.reply(`atualmente excedi a cota mensal de tokens do *chat GPT*.\n\n_vamos juntos resolver isso?_\nPara o *bot* continuar *gratuito*\nfaça 1 Real de PIX:\n https://livepix.gg/obigleo\n\na assinatura mensal é:\n 20USD ou 100 R$ (+taxas)\n \n vocês são mais de:\n 5931 pessoas em 288 grupos.\n_conto com vocês :D_\nsaldo da Vakinha: ${balance}R$\n\n*ps.* _Todas as outras funcionalidades estão operantes._`);
    } catch (error) {
      console.error(error);
    }
  
