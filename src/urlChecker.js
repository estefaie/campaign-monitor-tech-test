/* istanbul ignore file */
/* eslint no-console: 0 */

const axios = require('axios');
const rl = require('readline');

const COLOR_RED = '\x1b[31m';
const COLOR_GREEN = '\x1b[32m';

const distinct = (arr) => Array.from(new Set(arr));

const getAllLinks = (html, baseUrl) => {
  const linkRx = /<a href="(.*?)"/g;
  const links = [];
  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = linkRx.exec(html))) {
    links.push(match[1]);
  }
  return distinct(links)
    .filter((link) => link[0] !== '#')
    .map((link) => (link[0] === '/' ? `${baseUrl}${link}` : link));
};

const getBaseUrl = (url) => {
  const pathArray = url.split('/');
  return `${pathArray[0]}//${pathArray[2]}`;
};

const urlChecker = async () => {
  const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    'Please enter url for checking all its link urls. Make sure you include the protocol, e.g. https://google.com.\nEnter the url you want to check: ',
    async (url) => {
      const response = await axios.get(url);
      const { data } = response;
      const baseUrl = getBaseUrl(url);
      const links = getAllLinks(data, baseUrl);

      console.log(`${links.length} distinct links to check from ${url}`);

      links.forEach(async (link) => {
        try {
          const { status } = await axios.get(link);
          console.log(`${status === 200 ? COLOR_GREEN : COLOR_RED}${link} returned ${status}`);
        } catch (err) {
          console.error(`${COLOR_RED}error: getting response from ${link}`);
        }
        console.log('\x1b[0m');
      });

      readline.close();
    },
  );
};

urlChecker();
