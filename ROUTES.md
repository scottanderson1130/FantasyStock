where to find
what you get
what to input

also wish list of what you want/what to input

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