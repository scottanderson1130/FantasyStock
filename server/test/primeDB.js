/* eslint-disable camelcase */
/* eslint-disable no-console */
require('dotenv').config();

const {
  League,
  League_user,
  // Message,
  Stock,
  User
  // Stock_user
} = require('../db/index.js');
// messages req
// history req
// portfolio stock _user

function primeDB() {
  League.findOrCreate({
    where: {
      league_name: 'The League',
      id_owner: '6',
      settings: {
        schedule: {
          currentWeek: 1,
          weeklyMatchups: {
            week1: {
              match1: {
                home: {
                  teamID: '1',
                  score: 115
                },
                away: {
                  teamID: '3',
                  score: 99
                },
                winner: null,
                finalScore: null
              },
              match2: {
                home: {
                  teamID: '2',
                  score: 130
                },
                away: {
                  teamID: '4',
                  score: 125
                },
                winner: null,
                finalScore: null
              }
            },
            week2: {
              match1: {
                home: {
                  teamID: '1',
                  score: 101
                },
                away: {
                  teamID: '2',
                  score: 90
                },
                winner: null,
                finalScore: null
              },
              match2: {
                home: {
                  teamID: '3',
                  score: 35
                },
                away: {
                  teamID: 4,
                  score: 199
                },
                winner: null,
                finalScore: null
              }
            }
          }
        }
      }
    }
  })
    .then((res) => {
      if (res) {
        return console.log('✅ League Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League.findOrCreate({
      where: {
        league_name: 'The League of Extraordinary Gentlemen Investors',
        id_owner: '2',
        settings: {
          schedule: {
            currentWeek: 3,
            weeklyMatchups: {
              week1: {
                match1: {
                  home: {
                    teamID: '1',
                    score: 115
                  },
                  away: {
                    teamID: '3',
                    score: 99
                  },
                  winner: null,
                  finalScore: null
                },
                match2: {
                  home: {
                    teamID: '2',
                    score: 125
                  },
                  away: {
                    teamID: '4',
                    score: 120
                  },
                  winner: null,
                  finalScore: null
                }
              },
              week2: {
                match1: {
                  home: {
                    teamID: '1',
                    score: 101
                  },
                  away: {
                    teamID: '2',
                    score: 90
                  },
                  winner: null,
                  finalScore: null
                },
                match2: {
                  home: {
                    teamID: '3',
                    score: 35
                  },
                  away: {
                    teamID: 4,
                    score: 199
                  },
                  winner: null,
                  finalScore: null
                }
              },
              week3: {
                match1: {
                  home: {
                    teamID: '1',
                    score: 101
                  },
                  away: {
                    teamID: '4',
                    score: 90
                  },
                  winner: null,
                  finalScore: null
                },
                match2: {
                  home: {
                    teamID: '2',
                    score: 35
                  },
                  away: {
                    teamID: 3,
                    score: 199
                  },
                  winner: null,
                  finalScore: null
                }
              }
            }
          }
        }
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Other League Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Spiderman',
        full_name: 'Peter Parker',
        id: '1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Batman',
        full_name: 'Bruce Wayne',
        id: '2'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User2 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Superman',
        full_name: 'Clark Kent',
        id: '3'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User3 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'StarLord',
        full_name: 'Peter Quill',
        id: '4'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User4 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Colt18',
        full_name: 'Peyton Manning',
        id: '5'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User5 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'GOAT',
        full_name: 'Tom Brady',
        id: '6'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User6 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'ShortyJJ',
        full_name: 'Drew Brees',
        id: '7'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User7 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'GreatestShowOnTurf',
        full_name: 'Kurt Warner',
        id: '8'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User8 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'IronMan',
        full_name: 'Tony Stark',
        id: '9'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User9 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'StrongestAvenger',
        full_name: 'Bruce Banner',
        id: '10'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User10 Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: '5',
        bank_balance: 1000000,
        net_worth: 0,
        record: '0-2'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User1 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: '6',
        bank_balance: 1000000,
        net_worth: 0,
        record: '2-0'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User2 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: '7',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User3 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: '8',
        bank_balance: 1000000,
        net_worth: 0,
        record: '0-2'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User4 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '1',
        bank_balance: 1000000,
        net_worth: 0,
        record: '2-0'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User5 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '2',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User6 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '3',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User7 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '4',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User8 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '9',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User9 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '10',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User10 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '5',
        bank_balance: 1000000,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User11 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: '6',
        bank_balance: 815556,
        net_worth: 0,
        record: '1-1'
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User12 Association Created');
      }
      return console.warn('❌save undefined');
    })
    .then(() => {
      const tickerArr = [
        'ABT', 'ABBV', 'ACN', 'ACE', 'ADBE', 'ADT', 'AAP', 'AES', 'AET', 'AFL', 'AMG', 'A', 'GAS', 'APD', 'ARG', 'AKAM', 'AA', 'AGN', 'ALXN', 'ALLE', 'ADS', 'ALL', 'ALTR', 'MO', 'AMZN', 'AEE', 'AAL', 'AEP', 'AXP', 'AIG', 'AMT', 'AMP', 'ABC', 'AME', 'AMGN', 'APH', 'APC', 'ADI', 'AON', 'APA', 'AIV', 'AMAT', 'ADM', 'AIZ', 'T', 'ADSK', 'ADP', 'AN', 'AZO', 'AVGO',
        'BHI', 'BLL', 'BAC', 'BK', 'BCR', 'BXLT', 'BAX', 'BBT', 'BDX', 'BBBY', 'BRK-B', 'BBY', 'BLX', 'HRB', 'BA', 'BWA', 'BXP', 'BSK', 'BMY', 'BRCM', 'BF-B', 'CHRW', 'CA', 'CVC', 'COG', 'CAM', 'CPB', 'COF', 'CAH', 'HSIC', 'KMX', 'CCL', 'CAT', 'CBG', 'CBS', 'CELG', 'CNP', 'CTL', 'CERN', 'CF', 'SCHW', 'CHK', 'CVX', 'CMG', 'CB', 'CI', 'XEC', 'CINF', 'CTAS', 'CSCO',
        'C', 'CTXS', 'CLX', 'CME', 'CMS', 'COH', 'KO', 'CCE', 'CTSH', 'CL', 'CMCSA', 'CMA', 'CSC', 'CAG', 'COP', 'CNX', 'ED', 'STZ', 'GLW', 'COST', 'CCI', 'CSX', 'CMI', 'CVS', 'DHI', 'DHR', 'DRI', 'DVA', 'DE', 'DLPH', 'DAL', 'XRAY', 'DVN', 'DO', 'DTV', 'DFS', 'DISCA', 'DISCK', 'DG', 'DLTR', 'D', 'DOV', 'DOW', 'DPS', 'DTE', 'DD', 'DUK', 'DNB', 'ETFC', 'EMN',
        'ETN', 'EBAY', 'ECL', 'EIX', 'EW', 'EA', 'EMC', 'EMR', 'ENDP', 'ESV', 'ETR', 'EOG', 'EQT', 'EFX', 'EQIX', 'EQR', 'ESS', 'EL', 'ES', 'EXC', 'EXPE', 'EXPD', 'ESRX', 'XOM', 'FFIV', 'FB', 'FAST', 'FDX', 'FIS', 'FITB', 'FSLR', 'FE', 'FSIV', 'FLIR', 'FLS', 'FLR', 'FMC', 'FTI', 'F', 'FOSL', 'BEN', 'FCX', 'FTR', 'GME', 'GPS', 'GRMN', 'GD', 'GE', 'GGP', 'GIS',
        'GM', 'GPC', 'GNW', 'GILD', 'GS', 'GT', 'GOOGL', 'GOOG', 'GWW', 'HAL', 'HBI', 'HOG', 'HAR', 'HRS', 'HIG', 'HAS', 'HCA', 'HCP', 'HCN', 'HP', 'HES', 'HPQ', 'HD', 'HON', 'HRL', 'HSP', 'HST', 'HCBK', 'HUM', 'HBAN', 'ITW', 'IR', 'INTC', 'ICE', 'IBM', 'IP', 'IPG', 'IFF', 'INTU', 'ISRG', 'IVZ', 'IRM', 'JEC', 'JBHT', 'JNJ', 'JCI', 'JOY', 'JPM', 'JNPR', 'KSU',
        'K', 'KEY', 'GMCR', 'KMB', 'KIM', 'KMI', 'KLAC', 'KSS', 'KRFT', 'KR', 'LB', 'LLL', 'LH', 'LRCX', 'LM', 'LEG', 'LEN', 'LVLT', 'LUK', 'LLY', 'LNC', 'LLTC', 'LMT', 'L', 'LOW', 'LYB', 'MTB', 'MAC', 'M', 'MNK', 'MRO', 'MPC', 'MAR', 'MMC', 'MLM', 'MAS', 'MA', 'MAT', 'MKC', 'MCD', 'MHFI', 'MCK', 'MJN', 'MMV', 'MDT', 'MRK', 'MET', 'KORS', 'MCHP', 'MU',
        'MSFT', 'MHK', 'TAP', 'MDLZ', 'MON', 'MNST', 'MCO', 'MS', 'MOS', 'MSI', 'MUR', 'MYL', 'NDAQ', 'NOV', 'NAVI', 'NTAP', 'NFLX', 'NWL', 'NFX', 'NEM', 'NWSA', 'NEE', 'NLSN', 'NKE', 'NI', 'NE', 'NBL', 'JWN', 'NSC', 'NTRS', 'NOC', 'NRG', 'NUE', 'NVDA', 'ORLY', 'OXY', 'OMC', 'OKE', 'ORCL', 'OI', 'PCAR', 'PLL', 'PH', 'PDCO', 'PAYX', 'PNR', 'PBCT', 'POM', 'PEP', 'PKI',
        'PRGO', 'PFE', 'PCG', 'PM', 'PSX', 'PNW', 'PXD', 'PBI', 'PCL', 'PNC', 'RL', 'PPG', 'PPL', 'PX', 'PCP', 'PCLN', 'PFG', 'PG', 'PGR', 'PLD', 'PRU', 'PEG', 'PSA', 'PHM', 'PVH', 'QRVO', 'PWR', 'QCOM', 'DGX', 'RRC', 'RTN', 'O', 'RHT', 'REGN', 'RF', 'RSG', 'RAI', 'RHI', 'ROK', 'COL', 'ROP', 'ROST', 'RLC', 'R', 'CRM', 'SNDK', 'SCG', 'SLB', 'SNI', 'STX',
        'SEE', 'SRE', 'SHW', 'SIAL', 'SPG', 'SWKS', 'SLG', 'SJM', 'SNA', 'SO', 'LUV', 'SWN', 'SE', 'STJ', 'SWK', 'SPLS', 'SBUX', 'HOT', 'STT', 'SRCL', 'SYK', 'STI', 'SYMC', 'SYY', 'TROW', 'TGT', 'TEL', 'TE', 'TGNA', 'THC', 'TDC', 'TSO', 'TXN', 'TXT', 'HSY', 'TRV', 'TMO', 'TIF', 'TWX', 'TWC', 'TJK', 'TMK', 'TSS', 'TSCO', 'RIG', 'TRIP', 'FOXA', 'TSN', 'TYC', 'UA',
        'UNP', 'UNH', 'UPS', 'URI', 'UTX', 'UHS', 'UNM', 'URBN', 'VFC', 'VLO', 'VAR', 'VTR', 'VRSN', 'VZ', 'VRTX', 'VIAB', 'V', 'VNO', 'VMC', 'WMT', 'WBA', 'DIS', 'WM', 'WAT', 'ANTM', 'WFC', 'WDC', 'WU', 'WY', 'WHR', 'WFM', 'WMB', 'WEC', 'WYN', 'WYNN', 'XEL', 'XRX', 'XLNX', 'XL', 'XYL', 'YHOO', 'YUM', 'ZBH', 'ZION', 'ZTS', 'AVB', 'AVY'
      ];
      // eslint-disable-next-line array-callback-return
      tickerArr.map((ticker) => {
        Stock.findOrCreate({
          where: {
            ticker
          }
        });
      });
    })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Seeded');
      }
      return console.warn('❌Seedsave undefined');
    })
    .catch((err) => {
      console.warn(`❌${err}`);
    });
}

primeDB();
