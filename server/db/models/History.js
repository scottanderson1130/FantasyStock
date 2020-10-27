// id int [pk]
//   id_stock int
//   day date
//   price_per_share decimal

// Table league {
//   id int [pk]
//   leagueName varchar [not null]
//   setting json
// }

// Table user {
//   id int [pk]
//   username varchar [not null, unique]
//   email varchar [not null, unique]
//   phone_number varchar [not null, unique]
//   id_league int [not null]
//   money decimal [not null]
// }
// Table portfolio {
//   id int [pk]
//   id_user int
//   id_stock int
//   shares int
// }
// Table stock {
//   id int [pk]
//   ticker varchar [not null, unique]
//   company_name varchar [not null, unique]
//   current_price_per_share decimal
//   shares_available int
//   date_updated date

// }
// Table history {
//   // both stock transactions with users AND also need to track stock market fluctuations
//   // need to review API info to make educated decisions on what all we can track I guess..
//   id int [pk]
//   id_stock int
//   day date
//   price_per_share decimal
// }
// Table message {
//   id_user int
//   words text
//   date_created date
//   id_league int
// }
// Ref {
//   league.id < user.id_league
// }
// Ref {
//   portfolio.id_user > user.id
// }
// Ref {
//   portfolio.id_stock > stock.id
// }

// Ref: "stock"."id" < "history"."id_stock"

// Ref: "user"."id" < "message"."id_user"

// Ref: "message"."id_league" < "league"."id"
