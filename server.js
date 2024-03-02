import http from 'http';
import ethers from 'ethers';
import express from 'express';
import fs from 'fs';
import fetch from 'node-fetch'
import Web3 from 'web3';


const app = express();
const httpServer = http.createServer(app);
var data;
var transactionState = true

try {
  data = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
} catch (error) {
  console.error(error)
}

const run = async () => {

}

run()

const PORT = 5000;
httpServer.listen(PORT, (console.log(chalk.yellow(data.logo))));