export const statisticsLido = [
  // {
  //   numberText: '6,655,072,744',
  //   number: 6655072744,
  //   name: '',
  //   textBeforeNumber: '$',
  //   withoutSpaceBeforeNumber: true,
  //   withoutSpaceAfterNumber: false,
  //   numberColor: '#FFFFFF',
  //   headerText: 'Total staking assets',
  //   headerTextColor: '#FFFFFF',
  // },
  // {
  //   numberText: '143,201',
  //   number: 143201,
  //   name: '',
  //   textBeforeNumber: '',
  //   withoutSpaceBeforeNumber: true,
  //   withoutSpaceAfterNumber: false,
  //   numberColor: '#FFFFFF',
  //   headerText: 'Stakers',
  //   headerTextColor: '#FFFFFF',
  // },
  // {
  //   numberText: '166,725,259',
  //   number: 166725259,
  //   name: '',
  //   textBeforeNumber: '$',
  //   withoutSpaceBeforeNumber: true,
  //   withoutSpaceAfterNumber: false,
  //   numberColor: '#FFFFFF',
  //   headerText: 'Total rewards paid',
  //   headerTextColor: '#FFFFFF',
  // },
  {
    title: 'Total staking assets',
    number: '$6,655,072,744',
    numberColor: '#FFFFFF',
  },
  {
    title: 'Stakers',
    number: '143,201',
    numberColor: '#FFFFFF',
  },
  {
    title: 'Total rewards paid',
    number: '$166,725,259',
    numberColor: '#FFFFFF',
  },
]

export const theStoryBehindList = [
  {
    text: 'Blockchain is not a typical technological advance. You cannot immediately turn around a server and production.',
    backgroundColor: 'medium-turquoise',
    textColor: 'white',
  },
  {
    text: 'Lido has a request; Mad Devs has capacity. That was an ideal way to initiate collaboration.',
    backgroundColor: 'blue-sky',
    textColor: 'white',
  },
  {
    text: 'Our collaboration is composed of two phases.',
    backgroundColor: 'button-blue',
    textColor: 'white',
  },
]

export const projectPlanningList = [
  {
    text: 'Research and Development',
    backgroundColor: 'medium-turquoise',
    textColor: 'white',
    icon: 'research-icon',
  },
  {
    text: 'Checklists and collaborative markdown files filling ',
    backgroundColor: 'scooter',
    textColor: 'white',
    icon: 'checklist-icon',
  },
  {
    text: 'Implementation',
    backgroundColor: 'picton-blue',
    textColor: 'white',
    icon: 'star-icon',
  },
  {
    text: 'Integration tests',
    backgroundColor: 'blue-sky',
    textColor: 'white',
    icon: 'integration-icon',
  },
  {
    text: 'Control tests',
    backgroundColor: 'picton-blue-darker',
    textColor: 'white',
    icon: 'control-tests-icon',
  },
  {
    text: 'Audits*',
    backgroundColor: 'butterfly-blue',
    textColor: 'white',
    icon: 'audits-icon',
  },
  {
    text: 'Review of work',
    backgroundColor: 'ball-blue',
    textColor: 'white',
    icon: 'review-icon',
  },
]

export const projectGoalsCards = [
  {
    title: 'Goal 1:',
    descriptions:
      'Allow customers to receive an additional reward in addition to the stacking rewards if they contribute tokens to the liquidity pool.',
    icon: 'goal-1',
    folder: 'lido',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    title: 'Goal 2:',
    descriptions: 'The bridge that was in use at the time was sunsetting, so another bridge was required to keep the platform operational.',
    icon: 'goal-2',
    folder: 'lido',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
]

export const liquidityPoolData = {
  title: 'The process of integration with liquidity pool',
  folder: 'lido',
  file: 'github',
  extension: 'svg',
  textLink: 'View on Github',
  link: 'https://github.com/lidofinance/1inch-rewards-manager/blob/main/FLOW.md',
}

export const testingProcessData = {
  title: 'Testing process and how we solved it',
  folder: 'lido',
  file: 'checkbox-circle',
  extension: 'svg',
  textLink: 'View on Github',
  link: 'https://github.com/lidofinance/1inch-rewards-manager/blob/main/tests/test_happy_path.py#L13-L34',
}

export const migrationToWormholeData = {
  title: 'The migration to Wormhole bridge',
  folder: 'lido',
  file: 'wormhole',
  extension: 'svg',
  textLink: 'View on Github',
  link: 'https://github.com/lidofinance/anchor-collateral-steth/blob/9bc0483accc20ff758485918993219a5a9944dea/scripts/wormhole_connector_check.py#L127-L143',
}

export const migrationPlanData = [
  { text: 'Disable Lido bETH UI & Shuttle bETH bridging UI.' },
  { text: 'Disable AnchorVault smart contract, to prevent users from minting and bridging bETH while the migration is in progress.' },
  { text: 'Discontinue bETH support on Shuttle.' },
  { text: 'Migrate the Ethereum bETH liquidity from the Shuttle bridge vault through the Wormhole to bETH-webETH converter contract on Terra.' },
  { text: 'Enable AnchorVault smart contract setting bridge connector delegate to BridgeConnectorWormhole.' },
  { text: 'Enable the updated Lido bETH UI.' },
]

export const techStackLido = [
  {
    name: 'brownie',
    alt: 'Brownie',
    imgAlt: 'Brownie',
  },
  {
    name: 'python',
    alt: 'Python',
    imgAlt: 'Python',
  },
  {
    name: 'pytest',
    alt: 'PyTest',
    imgAlt: 'PyTest',
  },
  {
    name: 'ganache',
    alt: 'Ganache',
    imgAlt: 'Ganache',
  },
  {
    name: 'solidity',
    alt: 'Solidity',
    imgAlt: 'Solidity',
  },
  {
    name: 'infura',
    alt: 'Infura',
    imgAlt: 'Infura',
  },
  {
    name: '1inch',
    alt: '1INCH',
    imgAlt: '1INCH',
  },
  {
    name: 'vyper',
    alt: 'Vyper',
    imgAlt: 'Vyper',
  },
  {
    name: 'lido-protocol',
    alt: 'Lido protocol',
    imgAlt: 'Lido protocol',
  },
  {
    name: 'wormhole',
    alt: 'Wormhole',
    imgAlt: 'Wormhole',
  },
  {
    name: 'anchor-protocol',
    alt: 'Anchor protocol',
    imgAlt: 'Anchor protocol',
  },
  {
    name: 'terra-chain',
    alt: 'Terra chain',
    imgAlt: 'Terra chain',
  },
]

export const teamLido = [
  {
    name: 'Pavel Zverev',
    position: 'Tech Lead',
    image: {
      file: 'pavel-zverev',
    },
  },
  {
    name: 'Emir Sabyrkulov',
    position: 'Project Manager',
    image: {
      file: 'emir-sabyrkulov',
    },
  },
  {
    name: 'Gleb Ershov',
    position: 'Tech Lead',
    image: {
      file: 'gleb-ershov',
    },
  },
]

export const terminologyLido = [
  '<strong>Ethereum staking,</strong> ether stacking is the act of depositing 32 ETH to activate validator software. The user uploads 32 ethers and becomes a validator. If he does not have 32 ethers or does not want to be a validator, he can join the staking pool.',
  '<strong>Staking pool</strong> is a tool that becomes an ether validator and stacker, but uses the ether raised from users to do so, distributing the income from stacking among them and taking a small commission.',
  '<strong>stETH</strong> is the token that Lido\'s stacking pool users get when they stack their ether.',
  '<strong>DAI</strong> is a token, a stable coin, pegged to the U.S. dollar.',
  '<strong>Liquidity pool</strong> is a contract that stores liquidity raised from users, in tokens. Users are rewarded for this. Example: Curve. 1inch is an aggregator of liquidity pools.',
  '<strong>Liquidity provider (LP)</strong> is a user who deposits the liquidity to the liquidity pool and gets rewarded for that.',
  '<strong>LP token</strong> is a token, which LP receives as confirmation of its share in the liquidity pool.',
  '<strong>LDO</strong> is an Ethereum token granting governance rights in the Lido DAO. This token can be bought through any exchanger or (in our case) it is received by liquidity providers through a reward manager.',
  '<strong>Incentivization</strong> is additional rewarding of LP for some specific pool in some specific tokens. In our case, we want to reward LP of stETH - DAI pool with LDO and INCH.',
  '<strong>Co-incentivization</strong> is incentivization from two sides with two tokens. In our case, Lido and 1inch co-incentivize LP of stETH - DAI pool with LDO and INCH.',
]
