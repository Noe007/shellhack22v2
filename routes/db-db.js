const { Pool, Client } = require("pg");
const connectionString =
  "postgresql://doadmin:AVNS_RBa3W-LJJ9L8gCz23OT@db-postgresql-nyc1-96436-do-user-12367674-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require";

const pool = new Pool({
  connectionString,
});
const getUsers = (request, response) => {

  var querySearch = request.query.querySearch;
  var priority =  request.query.priority;

  console.log(
    "this is q: " + querySearch
  ) 

  console.log(
    "this is priority: " + priority
  ) 
  var order = [
    "root_symbol",
    "bbg",
    "symbol",
    "ric",
    "cusip",
    "isin",
    "bb_yellow",
    "bloomberg",
    "spn",
    "security_id",
    "sedol",
  ];
  console.log(order);

  const order2 = order
    .map(
      (element) => element + " ASC, "
      // element
    )
    .join(" ")
    .replace(/,\s*$/, "");

  const q = "%" + querySearch + "%" ;
let filter = "";

if(q){
   filter =     "WHERE " +
    "root_symbol like " 
    
+    "'"+q+"'" +
    
    " OR " +
    "bbg like " 
    +    "'"+q+"'" +
    " OR " +
    "symbol like " +    "'"+q+"'" +
    " OR " +
    "ric like " +    "'"+q+"'" +
    " OR " +
    "cusip like " +    "'"+q+"'" +
    " OR " +
    "isin like " +    "'"+q+"'" +
    " OR " +
    "bb_yellow like " +    "'"+q+"'" +
    " OR " +
    "bloomberg like " +    "'"+q+"'" +
    " OR " +
    "spn like " +    "'"+q+"'" +
    " OR " +
    "security_id like " +    "'"+q+"'" +
    " OR " +
    "sedol like " +    "'"+q+"'" +
    " "
  };

  const query =
    "SELECT * FROM public.shelldata22 " +
filter
    +
    "ORDER BY " +
    order2 +
    " LIMIT 10";

  console.log(query);
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
