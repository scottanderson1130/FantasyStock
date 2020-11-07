where to find

what you get

what to input

also wish list of what you want/what to input

LOGIN:
POST http://localhost:3000/user/
Ex Body { "id": "1012898963321920383431", "full_name": "myName", "username": "lastname?"}
EX Response:
{
    "avatar": "https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg",
    "full_name": "my",
    "username": "emassil",
    "id": "1012898963321920383431",
    "updatedAt": "2020-10-31T22:41:52.462Z",
    "createdAt": "2020-10-31T22:41:52.462Z",
    "leagueInfo": []
} 
NOTE: New user has no leagueInfo

WAIVERS ADD AND DROP:
POST http://localhost:3000/stock/waivers
Ex Body: { "id_stock": 8, "id_league": 2, "id_user": "6", "portfolio": {
    "price_per_share_at_purchase": 10,
    "shares": -5
    }
}
Ex Response:
{
    "id_stock": 8,
    "id_league": 2,
    "id_user": "6",
    "portfolio": {
        "shares": 25,
        "price_per_share_at_purchase": 30
    }
}

POST http://localhost:3000/league/addUser
  const { userID, leagueID } = req.body;
  response:
{
    "id_league": 1,
    "id_user": "9",
    "bank_balance": 1000000,
    "net_worth": 0,
    "updatedAt": "2020-11-07T17:46:17.799Z",
    "createdAt": "2020-11-07T17:46:17.799Z",
    "record": null,
    "team_name": null,
    "team_logo": null
}

Get all stock Info
route:
http://localhost:3000/stock/
Input:
N/A
Return Ex.
[
    {
        "id": 1,
        "ticker": "AAPL",
        "company_name": "Apple, Inc.",
        "current_price_per_share": 11215,
        "date_updated": "2020-10-28T05:00:00.000Z",
        "shares_available": 90,
        "createdAt": "2020-10-28T19:33:11.925Z",
        "updatedAt": "2020-10-28T19:33:11.925Z"
    },
    {
        "id": 2,
        "ticker": "GOOGL",
        "company_name": "Alphabet, Inc.",
        "current_price_per_share": 151959,
        "date_updated": "2020-10-28T05:00:00.000Z",
        "shares_available": 100,
        "createdAt": "2020-10-28T19:33:11.936Z",
        "updatedAt": "2020-10-28T19:33:11.936Z"
    }
]

Get specific stock info by stock ID
route:
http://localhost:3000/stock/stock/:stockID
Input:
stockID in route
Return Ex.
{
    "id": 1,
    "ticker": "AAPL",
    "company_name": "Apple, Inc.",
    "current_price_per_share": 11215,
    "date_updated": "2020-10-28T05:00:00.000Z",
    "shares_available": 90,
    "createdAt": "2020-10-28T19:33:11.925Z",
    "updatedAt": "2020-10-28T19:33:11.925Z"
}

Get portfolio (stock_user join) info by user ID
route:
http://localhost:3000/stock/portfolio/:userID
Input:
userID in route
Return Ex.
[
    {
        "shares": 2,
        "price_per_share_at_purchase": 11215,
        "createdAt": "2020-10-28T20:30:17.821Z",
        "updatedAt": "2020-10-28T20:30:17.821Z",
        "id_league": 2,
        "id_stock": 1,
        "id_user": 1
    },
    {
        "shares": 1,
        "price_per_share_at_purchase": 151959,
        "createdAt": "2020-10-28T20:30:17.827Z",
        "updatedAt": "2020-10-28T20:30:17.827Z",
        "id_league": 2,
        "id_stock": 2,
        "id_user": 1
    },
    {
        "shares": 10,
        "price_per_share_at_purchase": 2127,
        "createdAt": "2020-10-28T20:30:17.841Z",
        "updatedAt": "2020-10-28T20:30:17.841Z",
        "id_league": 2,
        "id_stock": 6,
        "id_user": 1
    }
]
Get all user/league info from single userID
route:
http://localhost:3000/user/league/user/:userID
Input:
userID in route
Return Ex.
[
    {
        "bank_balance": 1000000,
        "net_worth": 0,
        "record": "0-2",
        "createdAt": "2020-10-29T10:09:51.445Z",
        "updatedAt": "2020-10-29T10:09:51.445Z",
        "id_league": 1,
        "id_user": 5
    },
    {
        "bank_balance": 1000000,
        "net_worth": 0,
        "record": "2-0",
        "createdAt": "2020-10-29T10:09:51.478Z",
        "updatedAt": "2020-10-29T10:09:51.478Z",
        "id_league": 2,
        "id_user": 1
    },
    {
        "bank_balance": 1000000,
        "net_worth": 0,
        "record": "1-1",
        "createdAt": "2020-10-29T10:09:51.521Z",
        "updatedAt": "2020-10-29T10:09:51.521Z",
        "id_league": 2,
        "id_user": 5
    },
]
Get waivers info from leagueID
route:
http://localhost:3000/stock/waivers/:leagueID
Input:
leagueID in route
Return Ex.
[
    {
        "id": 1,
        "ticker": "AAPL",
        "company_name": "Apple, Inc.",
        "current_price_per_share": 11215,
        "date_updated": "2020-10-28T00:00:00.000Z",
        "createdAt": "2020-10-30T09:12:14.974Z",
        "updatedAt": "2020-10-30T09:12:14.974Z",
        "sharesRemaining": 98
    }, etc
]
Get User info from googleID
route:
http://localhost:3000/user/:userId
Input:
userID in route
Return Ex.
{
    "id": 5,
    "username": "Colt18",
    "full_name": "Peyton Manning",
    "phone_number": "(225) 999-1999",
    "avatar": "https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg",
    "createdAt": "2020-10-30T09:12:14.840Z",
    "updatedAt": "2020-10-30T09:12:14.840Z",
    "leagueInfo": [
        {
            "bank_balance": 1000000,
            "net_worth": 0,
            "record": "0-2",
            "createdAt": "2020-10-30T09:12:14.882Z",
            "updatedAt": "2020-10-30T09:12:14.882Z",
            "id_league": 1,
            "id_user": 5
        },
        {
            "bank_balance": 1000000,
            "net_worth": 0,
            "record": "1-1",
            "createdAt": "2020-10-30T09:12:14.944Z",
            "updatedAt": "2020-10-30T09:12:14.944Z",
            "id_league": 2,
            "id_user": 5
        }
    ]
}

Login with user: (id is google id)
POST http://localhost:3000/user/
{ "id": 1, "full_name": "me", "username": "email"}
res:
{
    "id": 1,
    "username": "Spiderman",
    "full_name": "Peter Parker",
    "avatar": "https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg",
    "createdAt": "2020-10-31T15:58:27.250Z",
    "updatedAt": "2020-10-31T15:58:27.250Z",
    "leagueInfo": [
        {
            "bank_balance": 1000000,
            "net_worth": 0,
            "record": "2-0",
            "createdAt": "2020-10-31T15:58:27.354Z",
            "updatedAt": "2020-10-31T15:58:27.354Z",
            "id_league": 2,
            "id_user": 1
        }
    ]
}








/////////don't use this yet
Update a user's info
put: http://localhost:3000/user/
{ id, username, full_name, phone_number, avatar } = req.body;

purchase stock:
Post: http://localhost:3000/stock/waivers
{ "id_stock": 5, "price_per_share_at_purchase": 1500, "id_league": 2, "id_user": 5, "shares": 10}
res:
{
    "id_stock": 5,
    "price_per_share_at_purchase": 1500,
    "id_league": 2,
    "id_user": 5,
    "shares": 10,
    "updatedAt": "2020-10-31T09:34:34.264Z",
    "createdAt": "2020-10-31T09:34:34.264Z"
}

- We need a matches table.
- user stocks route.
- Access the league and teams.
