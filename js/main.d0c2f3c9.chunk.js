(this.webpackJsonpui = this.webpackJsonpui || []).push([
  [0],
  {
    59: function (n, e, r) {},
    63: function (n, e, r) {},
    64: function (n, e, r) {},
    72: function (n, e, r) {},
    73: function (n, e, r) {},
    74: function (n, e, r) {},
    75: function (n, e, r) {},
    76: function (n, e, r) {},
    80: function (n, e, r) {},
    82: function (n, e, r) {},
    83: function (n, e, r) {
      "use strict";
      r.r(e);
      var t,
        u,
        a = r(0),
        i = r.n(a),
        o = r(43),
        c = r.n(o),
        s = r(17),
        f = r(5),
        l = r(44),
        m = r.n(l),
        d = (r(59), "light"),
        h = [
          {
            keywordName: "SELECT",
            statement:
              '--Description: SELECT keyword is used to select data from a database.\n--To Try: Try selecting different column(s) or replace column(s) with "*".\n\nSELECT custFirstName, custLastName\nFROM Customers;',
            validKeywords: ["type", "columns", "from", "as"],
          },
          {
            keywordName: "DISTINCT",
            statement:
              '--Description: SELECT DISTINCT keyword is used to select unique records from column(s).\n--To Try: Try selecting different column(s) or replace column(s) with "*".\n\nSELECT DISTINCT custWorkCity, custWorkState\nFROM Customers;',
            validKeywords: ["type", "distinct", "columns", "from", "as"],
          },
          {
            keywordName: "WHERE",
            statement:
              '--Description: WHERE keyword is used to filter records based on specified condition(s).\n--To Try: Try adding/nesting conditions and using different operators listed below.\n--Operators: "=", ">", "<", ">=", "<=", "<>", "AND", "OR", "NOT", "IS", "LIKE", "IN", "BETWEEN"\n\nSELECT movieFullName, movieYear\nFROM Movies\nWHERE movieFullName IS NOT NULL AND NOT (movieFullName=\'Parasite\' OR movieRating<7.0);',
            validKeywords: ["type", "columns", "from", "where", "as"],
          },
          {
            keywordName: "ORDER BY",
            statement:
              "--Description: ORDER BY keyword is used with ASC or DESC keyword to sort records in ascending or descending order.\n--To Try: Try adding columns to ORDER BY or changing sorting order.\n\nSELECT locationName, recordedDate, avgTemp\nFROM Weather\nORDER BY recordedDate ASC, avgTemp DESC;",
            validKeywords: ["type", "columns", "from", "orderby", "as"],
          },
          {
            keywordName: "LIMIT",
            statement:
              "--Description: LIMIT keyword is used to specify the numbers of records to return.\n--To Try: Try changing number of records to return.\n\nSELECT whiteRating, blackRating\nFROM ChessGames\nWHERE gameWinner='black'\nLIMIT 5 OFFSET 2;",
            validKeywords: ["type", "columns", "from", "where", "limit", "as"],
          },
          {
            keywordName: "AGGREGATE FUNCTIONS",
            statement:
              '--Description: Aggregate function keywords are used to return aggregate value of the selected column.\n--To Try: Try selecting different combinations of columns and aggregate functions.\n--Aggregate Functions: "MIN", "MAX", "COUNT", "AVG", "SUM"\n\nSELECT AVG(highScore), MIN(strikeRate), COUNT(*), SUM(ballsFaced)\nFROM PlayerStats;',
            validKeywords: [
              "type",
              "columns",
              "from",
              "min",
              "max",
              "count",
              "avg",
              "sum",
              "as",
            ],
          },
          {
            keywordName: "(INNER) JOIN",
            statement:
              "--Description: (INNER) JOIN keyword is used to return records matching join condition from both tables.\n--To Try: Try different combinations of tables to join and different join conditions.\n--Pro Tip: Decrease the duration or grab some 🍿 for this animation. Any guesses why 🤔?\n\nSELECT Games.gameID, Teams.teamName AS winningTeam\nFROM Teams INNER JOIN Games\nON Teams.teamID = Games.gameWinner;",
            validKeywords: ["type", "columns", "from", "as", "INNER JOIN"],
          },
          {
            keywordName: "LEFT (OUTER) JOIN",
            statement:
              "--Description: LEFT (OUTER) JOIN keyword is used to return records matching join condition as well as all un-matched records from the first table in query.\n--To Try: Try different combinations of tables to join and different join conditions.\n--Pro Tip: Decrease the duration or grab some 🍿 for this animation. Any guesses why 🤔?\n\nSELECT Games.gameID, Teams.teamName AS winningTeam\nFROM Teams LEFT JOIN Games\nON Teams.teamID = Games.gameWinner;",
            validKeywords: ["type", "columns", "from", "as", "LEFT JOIN"],
          },
          {
            keywordName: "RIGHT (OUTER) JOIN",
            statement:
              "--Description: RIGHT (OUTER) JOIN keyword is used to return records matching join condition as well as all un-matched records from the second table in query.\n--To Try: Try different combinations of tables to join and different join conditions.\n--Pro Tip: Decrease the duration or grab some 🍿 for this animation. Any guesses why 🤔?\n\nSELECT Games.gameID, Teams.teamName AS winningTeam\nFROM Teams RIGHT JOIN Games\nON Teams.teamID = Games.gameWinner;",
            validKeywords: ["type", "columns", "from", "as", "RIGHT JOIN"],
          },
          {
            keywordName: "FULL (OUTER) JOIN",
            statement:
              "--Description: FULL (OUTER) JOIN keyword is used to return records matching join condition as well as all un-matched records from the first and second table in query.\n--To Try: Try different combinations of tables to join and different join conditions.\n--Pro Tip: Decrease the duration or grab some 🍿 for this animation. Any guesses why 🤔?\n\nSELECT Games.gameID, Teams.teamName AS winningTeam\nFROM Teams FULL JOIN Games\nON Teams.teamID = Games.gameWinner;",
            validKeywords: ["type", "columns", "from", "as", "FULL JOIN"],
          },
          {
            keywordName: "UNION (ALL)",
            statement:
              "--Description: UNION is used to combine unique results of two or more queries.\n--To Try: Try selecting different columns and try UNION ALL to include duplicate values.\n\nSELECT restrntState FROM Restaurants\nUNION\nSELECT storeState FROM GroceryStores;",
            validKeywords: ["type", "columns", "from", "_next", "union", "as"],
          },
          {
            keywordName: "GROUP BY",
            statement:
              "--Description: GROUP BY is used to group rows that have same values into summary rows. It is often used with aggregate functions.\n--To Try: Try using different aggregate functions for SELECT and HAVING. Remember, HAVING keyword is used because WHERE cannot be used with aggregate functions.\n\nSELECT stockExchange, AVG(stockPSRatio)\nFROM StockProfiles\nGROUP BY stockExchange\nHAVING COUNT(stockID) > 2;",
            validKeywords: [
              "type",
              "columns",
              "from",
              "min",
              "max",
              "count",
              "avg",
              "sum",
              "groupby",
              "having",
              "as",
            ],
          },
        ],
        p = 0,
        b = 1,
        y = 2,
        v = 3,
        g = 4,
        T = 5,
        x = 6,
        N = 7,
        E = 8,
        w = 9,
        O = 10,
        L = 11,
        j = ["min", "max", "count", "avg", "sum"],
        I = ["concat"],
        S = ["single_quote_string", "string", "number", "null"],
        k = ["column_ref", "single_quote_string", "string", "number", "null"],
        R = {
          equals: "=",
          greater: ">",
          less: "<",
          greaterEqual: ">=",
          lessEqual: "<=",
          notEqual: "<>",
          and: "AND",
          or: "OR",
          is: "IS",
          isNot: "IS NOT",
          like: "LIKE",
          notLike: "NOT LIKE",
          not: "NOT",
          in: "IN",
          notIn: "NOT IN",
          between: "BETWEEN",
          notBetween: "NOT BETWEEN",
        },
        _ = {
          innerJoin: "INNER JOIN",
          leftJoin: "LEFT JOIN",
          rightJoin: "RIGHT JOIN",
          fullJoin: "FULL JOIN",
        },
        D = ["union", "union all"],
        F = ["type", "columns", "from", "as"],
        A = "--frame-dur",
        C = [],
        P = function (n) {
          return C.push(n);
        },
        q = {},
        U = "pre-anim",
        G = "active-cell",
        M = "paused-cell",
        J = "calculating-cell",
        B = "no-match-cell",
        H = "match-cell",
        K = "hide-cell",
        W = "unhide-cell",
        z = [
          "groupby-color-0",
          "groupby-color-1",
          "groupby-color-2",
          "groupby-color-3",
          "groupby-color-4",
          "groupby-color-5",
          "groupby-color-6",
          "groupby-color-7",
          "groupby-color-8",
          "groupby-color-9",
          "groupby-color-10",
          "groupby-color-11",
        ],
        V = ["Visualizer", "Animator", "Helper ;)"],
        Y =
          "Please check your query. Remember query customization is limited to keywords indicated.",
        X =
          "Please check your query. Remember for functions you can only use aggregate functions with only a single column as argument.",
        Q =
          "Please check your query. Remember you can only format your condition using operators indicated under WHERE dropdown correctly.",
        Z =
          "Please check you query. Remember for this option, SELECT and HAVING cannot contain non-aggregated column.",
        $ = r(1);
      var nn = function () {
          return Object($.jsx)("div", {
            className: "nav-bar",
            children: Object($.jsx)("nav", {
              children: Object($.jsxs)(s.b, {
                to: "/",
                children: [
                  Object($.jsx)("span", {
                    children: "SQL",
                  }),
                  Object($.jsx)(m.a, {
                    onInit: function (n) {
                      V.forEach(function (e) {
                        n.typeString(e).deleteAll();
                      }),
                        n.typeString(V[0]).start();
                    },
                  }),
                ],
              }),
            }),
          });
        },
        en = r(4),
        rn = r(51),
        tn = r(88),
        un = r(90),
        an = r(49),
        on = r(91),
        cn = r(52);
      r(63);
      var sn = function (n) {
          return Object($.jsx)("div", {
            className: "sql-editor",
            style: {
              backgroundColor: n.theme === d ? "#ffffff" : "#1e1e1e",
            },
            children: Object($.jsx)("div", {
              children: Object($.jsx)(cn.a, {
                defaultLanguage: "sql",
                theme: n.theme,
                options: {
                  fontSize: "16rem",
                  readOnly: false,
                },
                value: n.value,
                onChange: function (e) {
                  return n.setValue(e);
                },
              }),
            }),
          });
        },
        fn = (r(64), r(3)),
        ln = {
          title: "",
          colHeaders: [],
          data: [],
        },
        mn = {
          title: "Customers",
          colHeaders: [
            "custID",
            "custFirstName",
            "custLastName",
            "custWorkCity",
            "custWorkState",
            "custWorkZip",
          ],
          data: [
            [1, "James", "Butt", "Houma", "LA", 70116],
            [2, "Kiara", "Darakjy", "Brighton", "MI", 48116],
            [3, "Art", "Venere", "Newark", "NJ", 8014],
            [4, "Kris", "Marrier", "Bowie", "MD", 21224],
            [5, "Franc", "Vocelka", "Taos", "NM", 88011],
            [6, "Arlene", "Klusman", "Houma", "LA", 70112],
            [7, "Solange", "Shinko", "Kenner", "LA", 70002],
            [8, "Karl", "Klono", "Vineland", "NJ", 8822],
            [9, "Laurel", "Reitler", "Bowie", "MD", 21215],
            [10, "Derick", "Dhamer", "New York", "NY", 10013],
            [11, "Malinda", "Hochard", "Gary", "IN", 46202],
            [12, "Andra", "Scheyer", "Salem", "OR", 97302],
          ],
        },
        dn = {
          title: "Weather",
          colHeaders: [
            "weatherID",
            "locationName",
            "recordedDate",
            "avgTemp",
            "maxTemp",
            "minTemp",
          ],
          data: [
            [1, "Dehradun", "2022-01-01", 54, 72, 42],
            [2, "Sangli", "2022-01-02", 79, 86, 64],
            [3, "Sambalpur", "2022-01-03", 71, 81, 55],
            [4, "Sangli", "2022-01-03", 78, 85, 63],
            [5, "Gulbarga", "2022-01-01", 76, 87, 65],
            [6, "Sangli", "2022-01-01", 78, 83, 67],
            [7, "Gulbarga", "2022-01-02", 77, 87, 65],
            [8, "Sambalpur", "2022-01-01", 70, 78, 59],
            [9, "Dehradun", "2022-01-03", 56, 72, 43],
            [10, "Sambalpur", "2022-01-02", 70, 78, 56],
            [11, "Gulbarga", "2022-01-03", 74, 87, 65],
            [12, "Dehradun", "2022-01-02", 55, 63, 51],
          ],
        },
        hn = {
          title: "Movies",
          colHeaders: [
            "movieID",
            "movieFullName",
            "movieYear",
            "movieRating",
            "movieGenre",
          ],
          data: [
            [1, "8 Mile", 2002, 7.2, null],
            [2, "X2", 2003, null, "Action"],
            [3, "Insidious", 2010, 6.8, "Horror"],
            [4, null, 1971, 5.5, "Family"],
            [5, "Jumper", 2008, null, "Action"],
            [6, "Shining", 1980, 8.4, null],
            [7, null, 2011, 7.4, "Romance"],
            [8, "Deadpool", 2016, 8.1, "Action"],
            [9, "Parasite", 2019, 8.6, null],
            [10, "God Father", 1972, null, "Crime"],
            [11, "Titanic", 1997, 7.8, "Romance"],
            [12, null, 1994, 9.3, "Drama"],
          ],
        },
        pn = {
          title: "ChessGames",
          colHeaders: [
            "gameID",
            "whiteRating",
            "blackRating",
            "gameWinner",
            "victoryStatus",
          ],
          data: [
            [1, 1500, 1191, "white", "outOfTime"],
            [2, 1322, 1261, "black", "resign"],
            [3, 1496, 1500, "white", "mate"],
            [4, 1439, 1454, "white", "mate"],
            [5, 1250, 1002, "draw", "draw"],
            [6, 2449, 978, "white", "resign"],
            [7, 2036, 1706, "black", "resign"],
            [8, 1139, 1212, "draw", "draw"],
            [9, 998, 1016, "black", "outOfTime"],
            [10, 2422, 2386, "black", "resign"],
            [11, 1302, 875, "black", "outOfTime"],
            [12, 875, 1057, "black", "mate"],
          ],
        },
        bn = {
          title: "PlayerStats",
          colHeaders: [
            "playerID",
            "playerFullName",
            "tournament",
            "innings",
            "strikeRate",
            "highScore",
            "ballsFaced",
          ],
          data: [
            ["9f0c", "CH Morris", "IPL 2016", 7, 178.89, 82, 109],
            ["3c9s", "JP Duminy", "IPL 2017", 9, 163.82, 52, 94],
            ["9z4j", "SS Iyer", "IPL 2017", 6, 69.76, 19, 43],
            ["5o3q", "I Kishan", "IPL 2018", 12, 149.45, 62, 184],
            ["1t0r", "JC Buttler", "IPL 2016", 14, 138.58, 41, 184],
            ["2v2b", "FD Plessis", "IPL 2017", 1, 114.28, 8, 7],
            ["8j9x", "PJ Cummins", "IPL 2017", 9, 145.28, 24, 53],
            ["5h8z", "S Dhawan", "IPL 2018", 16, 136.91, 92, 363],
            ["i16k", "DA Warner", "IPL 2019", 12, 143.86, 100, 481],
            ["4m1m", "Y Singh", "IPL 2016", 10, 131.84, 44, 179],
            ["3g9x", "J Bairstow", "IPL 2019", 10, 157.24, 114, 283],
            ["6x1k", "MS Dhoni", "IPL 2019", 15, 134.62, 84, 309],
          ],
        },
        yn = {
          title: "Teams",
          colHeaders: ["teamID", "teamName"],
          data: [
            [1, "CSK"],
            [2, "DC"],
            [3, "GT"],
            [4, "KKR"],
            [5, "LSG"],
            [6, "MI"],
            [7, "PK"],
            [8, "RR"],
            [9, "RCB"],
            [10, "SH"],
          ],
        },
        vn = {
          title: "Games",
          colHeaders: ["gameID", "homeTeam", "awayTeam", "tossWinner", "gameWinner"],
          data: [
            ["6q8", 10, 9, 10, 10],
            ["0i9", 4, 8, 4, 8],
            ["36c", 10, 8, 8, 8],
            ["97f", 11, 9, 9, 11],
            ["5e9", 3, 10, 3, 10],
            ["3db", 1, 3, 3, 1],
            ["1f4", 0, 4, 0, 0],
            ["r52", 1, 3, 3, 1],
          ],
        },
        gn = {
          title: "Restaurants",
          colHeaders: ["restrntID", "restrntName", "restrntCity", "restrntState"],
          data: [
            [1, "KFC", "Chicago", "IL"],
            [2, "Subway", "Fresno", "CA"],
            [3, "Starbucks", "Miami", "FL"],
            [4, "Starbucks", "Seattle", "WA"],
            [5, "Pizza Hut", "Plano", "TX"],
            [6, "Domino's", "Detroit", "MI"],
            [7, "KFC", "Dallas", "TX"],
            [8, "Domino's", "Seattle", "WA"],
            [9, "Popeyes", "Tempe", "AZ"],
          ],
        },
        Tn = {
          title: "GroceryStores",
          colHeaders: ["storeID", "storeName", "storeCity", "storeState"],
          data: [
            [1, "Walmart", "Elgin", "IL"],
            [2, "Safeway", "Irvine", "CA"],
            [3, "7-Eleven", "Seattle", "WA"],
            [4, "Walmart", "Eagan", "MN"],
            [5, "Kroger", "Kent", "WA"],
            [6, "7-Eleven", "Dallas", "TX"],
            [7, "Publix", "Tampa", "FL"],
            [8, "Kroger", "Oakland", "CA"],
            [9, "ShopRite", "Edison", "NJ"],
          ],
        },
        xn = {
          title: "StockProfiles",
          colHeaders: [
            "stockID",
            "stockTicker",
            "stockPERatio",
            "stockPSRatio",
            "stockExchange",
            "stockIndustry",
          ],
          data: [
            [1, "SAP", 23.63, 4.31, "NYSE", "Software"],
            [2, "NOW", 493.35, 19.99, "NYSE", "Software"],
            [3, "MCD", 23.59, 8.08, "NYSE", "Restaurants"],
            [4, "AAPL", 26.43, 7.28, "NASDAQ", "Electronics"],
            [5, "PZA.TO", 18.51, 13.19, "TSX", "Restaurants"],
            [6, "TD", 12.86, 4.52, "NYSE", "Banks"],
            [7, "INFY.NS", 35.53, 6.14, "NSE", "IT"],
            [8, "ORCL", 30.03, 5.34, "NYSE", "Software"],
            [9, "BNS.TO", 11.62, 3.71, "TSX", "Banks"],
            [10, "SBUX", 23.53, 3.61, "NASDAQ", "Restaurants"],
            [11, "TCS.NS", 36.11, 7.05, "NSE", "IT"],
            [12, "SBIN.NS", 14.02, 1.83, "NSE", "Banks"],
          ],
        },
        Nn = r(7),
        En = r(6),
        wn = r(41),
        On = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            n.forEach(function (n, o) {
              var c = e[0].findIndex(function (e) {
                  return e.innerText === n.tblName;
                }),
                s = e.map(function (n) {
                  return n[c];
                });
              (i += 4 * t),
                He([
                  {
                    frame: function () {
                      return s[0].classList.add(G);
                    },
                    duration: a + 4 * t * o,
                  },
                  {
                    frame: function () {
                      s[0].classList.add(J),
                        Qe([n.resTblName], u, !0, !1, !1),
                        Qe(
                          s.slice(1).map(function (n) {
                            return n.innerText;
                          }),
                          u,
                          !1,
                          !1,
                          !0
                        ),
                        nr(r, n.resTblName, [K], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s.slice(1).forEach(function (n) {
                        return n.classList.add(H);
                      }),
                        nr(r, n.resTblName, [U, W], !0),
                        nr(r, n.resTblName, [H], !0, !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s[0].classList.remove(G, J),
                        nr(r, n.resTblName, [K, U, W], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        Ln = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            n.forEach(function (n, o) {
              var c = e[0].findIndex(function (e) {
                  return e.innerText === n.tblName;
                }),
                s = e.map(function (n) {
                  return n[c];
                });
              (i += 4 * t),
                He([
                  {
                    frame: function () {
                      return s[0].classList.add(G);
                    },
                    duration: a + 4 * t * o,
                  },
                  {
                    frame: function () {
                      s[0].classList.add(J),
                        Qe([n.resTblName], u, !0, !1, !1),
                        nr(r, n.resTblName, [K], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s.slice(1).forEach(function (n) {
                        return n.classList.add(M);
                      }),
                        nr(r, n.resTblName, [U, W], !0),
                        nr(r, n.resTblName, [H], !0, !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s[0].classList.remove(G, J),
                        nr(r, n.resTblName, [K, U, W], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        jn = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0,
            o = n.map(function (n) {
              return n.tblName;
            }),
            c = In(o, e);
          return (
            e.slice(1).forEach(function (n, s) {
              var f = n.filter(function (n, r) {
                return o.includes(e[0][r].innerText);
              });
              (i += 6 * t),
                He([
                  {
                    frame: function () {
                      return f.forEach(function (n) {
                        return n.classList.remove(M);
                      });
                    },
                    duration: a + 6 * t * s,
                  },
                  {
                    frame: function () {
                      return f.forEach(function (n) {
                        return n.classList.add(G);
                      });
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      return f.forEach(function (n) {
                        return n.classList.add(J);
                      });
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      f.forEach(function (n) {
                        return n.classList.remove(G, J);
                      }),
                        c.includes(s) && ($e(s, o, e, r, u), er(r, [K], !0));
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      f.forEach(function (n) {
                        return n.classList.add(c.includes(s) ? H : B);
                      }),
                        er(r, [U, W, H], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      return er(r, [K, U, W], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        In = function (n, e) {
          var r = n.map(function (n) {
              return e[0].findIndex(function (e) {
                return e.innerText === n;
              });
            }),
            t = e.slice(1).map(function (n) {
              return n.filter(function (n, e) {
                return r.includes(e);
              });
            }),
            u = [];
          return (
            e.slice(1).forEach(function (n, e) {
              var r = t[e].reduce(function (n, e) {
                return n.concat(e.innerText);
              }, "");
              u.find(function (n) {
                return n.id === r;
              }) ||
                u.push({
                  id: r,
                  index: e,
                });
            }),
            u.map(function (n) {
              return n.index;
            })
          );
        },
        Sn = r(45);
      function kn(n) {
        var e = new Error(n);
        return (e.name = "AppError"), e;
      }
      kn.prototype = Object.create(Error.prototype);
      var Rn = function n(e) {
        Object(Sn.a)(this, n), (this.value = e);
      };
      (Rn.False = new Rn(0)), (Rn.True = new Rn(1)), (Rn.Unknown = new Rn(2));
      var _n = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            n.forEach(function (n, o) {
              var c = e[0].findIndex(function (e) {
                  return e.innerText === n.tblName;
                }),
                s = e.map(function (n) {
                  return n[c];
                });
              (i += 5 * t),
                He([
                  {
                    frame: function () {
                      return s[0].classList.add(G);
                    },
                    duration: a + 5 * t * o,
                  },
                  {
                    frame: function () {
                      return s[0].classList.add(J);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s.slice(1).forEach(function (n) {
                        return n.classList.remove(M);
                      }),
                        Ze(n.resTblName, s, u),
                        nr(r, n.resTblName, [K], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s.slice(1).forEach(function (n) {
                        return n.classList.contains(B)
                          ? null
                          : n.classList.add(H);
                      }),
                        nr(r, n.resTblName, [U, W], !0),
                        nr(r, n.resTblName, [H], !0, !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s[0].classList.remove(G, J),
                        nr(r, n.resTblName, [K, U, W], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        Dn = function (n, e) {
          return {
            colName: n,
            tblIndex: e,
          };
        },
        Fn = function n(e, r, t) {
          if (S.includes(e.type)) return [];
          if ("column_ref" === e.type) {
            var u = e.table
              ? r.findIndex(function (n) {
                  return [n.tbl, n.as].includes(e.table);
                })
              : -1;
            return (
              (u =
                u > -1 && t[u].colHeaders.includes(e.column) ? u : -1),
              [Dn(e.column, u)]
            );
          }
          return "unary_expr" === e.type && e.operator === R.not
            ? n(e.expr, r, t)
            : "function" === e.type &&
              "NOT" === e.name &&
              "expr_list" === e.args.type &&
              1 === e.args.value.length
            ? n(e.args.value[0], r, t)
            : [R.in, R.notIn, R.between, R.notBetween].includes(e.operator)
            ? n(e.left, r, t)
            : n(e.left, r, t).concat(n(e.right, r, t));
        },
        An = function n(e, r, t) {
          if (k.includes(e.type)) return Rn.Unknown;
          if ("unary_expr" === e.type && e.operator === R.not)
            return qn(n(e.expr, r, t));
          if (
            "function" === e.type &&
            "NOT" === e.name &&
            "expr_list" === e.args.type &&
            1 === e.args.value.length
          )
            return qn(n(e.args.value[0], r, t));
          if ([R.or, R.and].includes(e.operator))
            return Pn(e.operator, n(e.left, r, t), n(e.right, r, t));
          if ([R.in, R.notIn, R.between, R.notBetween].includes(e.operator)) {
            var u = t[r.indexOf(e.left.column)].innerText;
            u = Number(u) ? Number(u) : u;
            var a = e.right.value.map(function (n) {
              return Number(n.value) ? Number(n.value) : n.value;
            });
            return Pn(e.operator, u, a);
          }
          var i =
            "column_ref" === e.left.type
              ? t[r.indexOf(e.left.column)].innerText
              : e.left.value;
          i = "" === (i = Number(i) && "column_ref" === e.left.type ? Number(i) : i) ? null : i;
          var o =
            "column_ref" === e.right.type
              ? t[r.indexOf(e.right.column)].innerText
              : e.right.value;
          return (
            (o = "" === (o = Number(o) && "column_ref" === e.right.type ? Number(o) : o) ? null : o),
            Pn(e.operator, i, o)
          );
        },
        Pn = function (n, e, r) {
          if (
            (null === e || null === r) &&
            ![R.and, R.or, R.is, R.isNot].includes(n)
          )
            return Rn.Unknown;
          if (n === R.equals) return e === r ? Rn.True : Rn.False;
          if (n === R.greater) return e > r ? Rn.True : Rn.False;
          if (n === R.less) return e < r ? Rn.True : Rn.False;
          if (n === R.greaterEqual) return e >= r ? Rn.True : Rn.False;
          if (n === R.lessEqual) return e <= r ? Rn.True : Rn.False;
          if (n === R.notEqual) return e !== r ? Rn.True : Rn.False;
          if (n === R.and) return Gn(e, r);
          if (n === R.or) return Un(e, r);
          if (n === R.is) return e === r ? Rn.True : Rn.False;
          if (n === R.isNot) return e !== r ? Rn.True : Rn.False;
          if (n === R.like || n === R.notLike) {
            var t = new RegExp(
              "^" + r.replaceAll("%", ".*").replaceAll("_", ".") + "$"
            ).test(e)
              ? Rn.True
              : Rn.False;
            return n === R.notLike && (t = qn(t)), t;
          }
          if (n === R.in || n === R.notIn) {
            var u =
              e && r[0] ? (e === r[0] ? Rn.True : Rn.False) : Rn.Unknown;
            return (
              r.slice(1).forEach(function (n) {
                return (u = Un(
                  u,
                  e && n ? (e === n ? Rn.True : Rn.False) : Rn.Unknown
                ));
              }),
              (u = n === R.notIn ? qn(u) : u)
            );
          }
          var a =
            e && r[0] && r[1]
              ? r[0] <= e && e <= r[1]
                ? Rn.True
                : Rn.False
              : Rn.Unknown;
          return (a = n === R.notBetween ? Un(a) : a);
        },
        qn = function (n) {
          return n === Rn.True
            ? Rn.False
            : n === Rn.False
            ? Rn.True
            : Rn.Unknown;
        },
        Un = function (n, e) {
          return n === Rn.True || e === Rn.True
            ? Rn.True
            : n === Rn.Unknown || e === Rn.Unknown
            ? Rn.False
            : Rn.True; // This seems to be a bug in original code. Should be Rn.False.
        },
        Gn = function (n, e) {
          return n === Rn.False || e === Rn.False
            ? Rn.False
            : n === Rn.Unknown || e === Rn.Unknown
            ? Rn.Unknown
            : Rn.True;
        },
        Mn = function (n, e, r, u, a, i) {
          var o =
              arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            c = 0;
          return (
            u.forEach(function (u, s) {
              var f = e[0].findIndex(function (e) {
                  return e.innerText === u.tblName;
                }),
                l = e.map(function (n) {
                  return n[f];
                });
              (c += 5 * t),
                He([
                  {
                    frame: function () {
                      return l[0].classList.add(G);
                    },
                    duration: o + 5 * t * s,
                  },
                  {
                    frame: function () {
                      return l[0].classList.add(J);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      l.slice(1).forEach(function (n) {
                        return n.classList.remove(M);
                      }),
                        Wn(f, e.slice(), n.orderby, u.resTblName, r, a, i);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      l.slice(1).forEach(function (n) {
                        return n.classList.add(H);
                      }),
                        nr(a, u.resTblName, [U, W], !0),
                        nr(a, u.resTblName, [H], !0, !0),
                        zn(a, u.resTblName);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      l[0].classList.remove(G, J),
                        nr(a, u.resTblName, [K, U, W], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            c
          );
        },
        Jn = function (n, e, r) {
          return n.slice(1).map(function (n) {
            return {
              isSelByWhere: An(e, r, n) === Rn.True,
            };
          });
        },
        Bn = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            n.forEach(function (n, o) {
              var c = e[0].findIndex(function (e) {
                  return e.innerText === n.tblName;
                }),
                s = e.map(function (n) {
                  return n[c];
                });
              (i += 4 * t),
                He([
                  {
                    frame: function () {
                      return s[0].classList.add(G);
                    },
                    duration: a + 4 * t * o,
                  },
                  {
                    frame: function () {
                      s[0].classList.add(J), Qe([n.resTblName], u, !0, !1, !1);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      var e = s.filter(function (e) {
                        var r = n.resTblName.split(" AS ");
                        return !r[1] || e.innerText !== r[1];
                      });
                      e.slice(1).forEach(function (n) {
                        return n.classList.add(M);
                      }),
                        Qe(
                          e.slice(1).map(function (n) {
                            return n.innerText;
                          }),
                          u,
                          !1,
                          !1,
                          !0
                        ),
                        nr(r, n.resTblName, [K], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s[0].classList.remove(G, J),
                        nr(r, n.resTblName, [K], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        Hn = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            e.forEach(function (e, o) {
              var c = n.find(function (n) {
                  return e.resTblName === n.resTblName;
                }).tblName,
                s = r.findIndex(function (n) {
                  return n.tbl === c;
                }),
                f = t[s][0].map(function (n) {
                  return n.innerText;
                });
              (i += (function (n, e, r, u, a, i) {
                var o =
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : 0,
                  c = 0,
                  s = r
                    .filter(function (n) {
                      return n.isSelByWhere;
                    })
                    .map(function (n) {
                      return n.row;
                    }),
                  f = Bn(
                    r.map(function (n) {
                      return n.row;
                    }),
                    n,
                    e.slice()
                  );
                return (
                  s.forEach(function (s, l) {
                    var m = s.slice();
                    (c += 4 * t),
                      He([
                        {
                          frame: function () {
                            return m.forEach(function (n, e) {
                              return f.includes(e) ? n.classList.add(G) : null;
                            });
                          },
                          duration: o + 4 * t * l,
                        },
                        {
                          frame: function () {
                            return m.forEach(function (n, e) {
                              return f.includes(e) ? n.classList.add(J) : null;
                            });
                          },
                          duration: t,
                        },
                        {
                          frame: function () {
                            return m.forEach(function (n) {
                              return n.classList.remove(G, J);
                            });
                          },
                          duration: t,
                        },
                        {
                          frame: function () {
                            return m.forEach(function (n) {
                              return n.classList.add(H);
                            });
                          },
                          duration: t,
                        },
                      ]);
                  }),
                  c
                );
              })(t[s], u[s], i, o, f, a, a)),
                (i += Bn(
                  r.map(function (n) {
                    return n.row;
                  }),
                  f,
                  u[s],
                  a,
                  i
                ));
            }),
            i
          );
        },
        Kn = function (n, e, r, u, a, i) {
          var o =
              arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            c = 0,
            s = Bn(n, e),
            f = Hn(
              n,
              s,
              r.map(function (n) {
                return n.type;
              })
            ).map(function (e) {
              return u[0].findIndex(function (r) {
                return r.every(function (n, t) {
                  return n.innerText === e[t].innerText;
                });
              });
            });
          return (
            f.forEach(function (n, e) {
              var r = u[n].slice();
              (c += 5 * t),
                He([
                  {
                    frame: function () {
                      return r.forEach(function (n) {
                        return n.classList.add(G);
                      });
                    },
                    duration: o + 5 * t * e,
                  },
                  {
                    frame: function () {
                      return r.forEach(function (n) {
                        return n.classList.add(J);
                      });
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      Qe(
                        s.map(function (e) {
                          return r[e].innerText;
                        }),
                        a,
                        !1,
                        !0,
                        !1
                      );
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      return r.forEach(function (n) {
                        return n.classList.remove(G, J);
                      });
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      r.forEach(function (n) {
                        return n.classList.add(H);
                      }),
                        er(i, [K, U, W], !0),
                        er(i, [H], !0, !0);
                    },
                    duration: t,
                  },
                ]);
            }),
            (c += 2 * t),
            He([
              {
                frame: function () {},
                duration: c,
              },
              {
                frame: function () {
                  er(i, [K, U, W], !1);
                },
                duration: t,
              },
            ]),
            c
          );
        },
        Wn = function (n, e, r, u) {
          var a =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = 0;
          return (
            r.forEach(function (r, o) {
              var c = e[0].findIndex(function (e) {
                  return e.innerText === r.tblName;
                }),
                s = e.map(function (n) {
                  return n[c];
                });
              (i += 4 * t),
                He([
                  {
                    frame: function () {
                      return s[0].classList.add(G);
                    },
                    duration: a + 4 * t * o,
                  },
                  {
                    frame: function () {
                      s[0].classList.add(J),
                        Qe([r.resTblName], u, !0, !1, !1);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      var e = s
                        .filter(function (e) {
                          var r = n.find(function (n) {
                            return n.resTblName === e.resTblName;
                          });
                          return !r || e.innerText !== r.tblName;
                        })
                        .slice(1);
                      e.forEach(function (n) {
                        return n.classList.add(M);
                      }),
                        Qe(
                          e.map(function (n) {
                            return n.innerText;
                          }),
                          u,
                          !1,
                          !1,
                          !0
                        ),
                        nr(n, r.resTblName, [K], !0);
                    },
                    duration: t,
                  },
                  {
                    frame: function () {
                      s[0].classList.remove(G, J),
                        nr(n, r.resTblName, [K], !1);
                    },
                    duration: t,
                  },
                ]);
            }),
            i
          );
        },
        zn = function (n, e, r, u, a, i) {
          var o =
              arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            c = 0;
          return (
            e.forEach(function (e, s) {
              var f = n.find(function (n) {
                  return e.resTblName === n.resTblName;
                }).tblName,
                l = r.findIndex(function (n) {
                  return n.tbl === f;
                }),
                m = t[l][0].map(function (n) {
                  return n.innerText;
                }),
                d = i,
                h = u[l],
                p = Bn(t[l], a);
              c += Kn(t[l].slice(1), p, d, h, i, o + c);
            }),
            c
          );
        };
      var Vn = function (n) {
          var e = Object(a.useState)(d),
            r = Object(en.a)(e, 2),
            t = r[0],
            u = r[1],
            i = h.map(function (e, r) {
              return Object($.jsx)(
                rn.a.Item,
                {
                  as: "button",
                  onClick: function () {
                    var t;
                    Ke(n.setVizRunning),
                      n.setStmtIndex(r),
                      n.setSql(e.statement),
                      n.setTbls(
                        (t = r) === p || t === b
                          ? [mn]
                          : t === y
                          ? [hn]
                          : t === v
                          ? [dn]
                          : t === g
                          ? [pn]
                          : t === T
                          ? [bn]
                          : t === x || t === N || t === E || t === w
                          ? [yn, vn]
                          : t === O
                          ? [gn, Tn]
                          : t === L
                          ? [xn]
                          : []
                      ),
                      n.setResTbl(
                        (function (n) {
                          var e = Object(fn.a)({}, ln);
                          return (e.title = n), [e];
                        })("Result")
                      );
                  },
                  children: e.keywordName,
                },
                r
              );
            });
          return Object($.jsxs)("div", {
            className: "code-area",
            children: [
              Object($.jsxs)("div", {
                children: [
                  Object($.jsx)(tn.a, {
                    title: "SQL Keywords",
                    disabled: n.isVizRunning,
                    children: i,
                  }),
                  Object($.jsxs)(tn.a, {
                    title: "Editor Theme",
                    children: [
                      Object($.jsx)(rn.a.Item, {
                        as: "button",
                        onClick: function () {
                          return u(d);
                        },
                        children: "Light",
                      }),
                      Object($.jsx)(rn.a.Item, {
                        as: "button",
                        onClick: function () {
                          return u("vs-dark");
                        },
                        children: "Dark",
                      }),
                    ],
                  }),
                ],
              }),
              Object($.jsx)(sn, {
                theme: t,
                value: n.sql,
                setValue: n.setSql,
              }),
              Object($.jsxs)("div", {
                children: [
                  Object($.jsxs)(un.a, {
                    children: [
                      Object($.jsx)(an.a, {
                        variant: "primary",
                        onClick: function () {
                          return n.updateFrameDur(!1);
                        },
                        disabled: n.isVizRunning,
                        children: "-",
                      }),
                      Object($.jsx)(un.a.Text, {
                        children: "Duration",
                      }),
                      Object($.jsx)(on.a, {
                        readOnly: !0,
                        value: n.frameDur,
                      }),
                      Object($.jsx)(un.a.Text, {
                        children: "ms",
                      }),
                      Object($.jsx)(an.a, {
                        variant: "primary",
                        onClick: function () {
                          return n.updateFrameDur(!0);
                        },
                        disabled: n.isVizRunning,
                        children: "+",
                      }),
                    ],
                  }),
                  Object($.jsx)(an.a, {
                    variant: "success",
                    onClick: function () {
                      return n.vizCallback();
                    },
                    disabled: n.isVizRunning,
                    children: "Visualize!",
                  }),
                  Object($.jsx)(an.a, {
                    variant: "danger",
                    onClick: function () {
                      return Ke(n.setVizRunning);
                    },
                    children: "Stop/Reset",
                  }),
                ],
              }),
            ],
          });
        },
        Yn = r(89);
      r(72);
      var Xn = function (n) {
          var e = n.tbl.colHeaders,
            r = [],
            t = [],
            u = e.map(function (n, e) {
              return Object($.jsx)(
                "th",
                {
                  ref: function (n) {
                    return t.push(n);
                  },
                  children: n,
                },
                e
              );
            });
          r.push(t);
          var a = n.tbl.data.map(function (n, t) {
            var u = [],
              a = e.map(function (e, r) {
                return Object($.jsx)(
                  "td",
                  {
                    ref: function (n) {
                      return u.push(n);
                    },
                    children: n[r],
                  },
                  r
                );
              });
            return (
              r.push(u),
              Object($.jsx)(
                "tr",
                {
                  children: a,
                },
                t
              )
            );
          });
          return (
            (n.tblRefs.current[n.index] = r),
            Object($.jsxs)("div", {
              className: "data-table",
              children: [
                Object($.jsx)("div", {
                  children: n.tbl.title,
                }),
                Object($.jsxs)(Yn.a, {
                  bordered: !0,
                  children: [
                    Object($.jsx)("thead", {
                      children: Object($.jsx)("tr", {
                        children: u,
                      }),
                    }),
                    Object($.jsx)("tbody", {
                      children: a,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Qn = (r(73),
        function (n) {
          var e = n.tbls.map(function (e, r) {
              return Object($.jsx)(
                Xn,
                {
                  tbl: e,
                  tblRefs: n.tblRefs,
                  index: r,
                },
                r
              );
            }),
            r = n.resTbls.map(function (e, r) {
              return Object($.jsx)(
                Xn,
                {
                  tbl: e,
                  tblRefs: n.resTblRefs,
                  index: r,
                },
                r
              );
            });
          return Object($.jsxs)("div", {
            className: "viz-area",
            children: [
              n.tbls.length > 0
                ? Object($.jsx)("div", {
                    children: e,
                  })
                : null,
              n.resTbls.length > 0
                ? Object($.jsx)("div", {
                    children: r,
                  })
                : null,
            ],
          });
        });
      r(74);
      var Zn = function () {
        var n = Object(a.useState)(null),
          e = Object(en.a)(n, 2),
          r = e[0],
          t = e[1],
          u = Object(a.useState)(
            "--To Start: Choose a SQL Keyword from the dropdown above and press 👇 visualize to see what it does 🤩!\n\n--Pro tip: This tool works best on a 🖥️ or 💻 unless you like frivolous scrolling 🤪.\n\n\n\n--Found something that doesn't quite look right? Send me a message at admin@animatesql.com."
          ),
          i = Object(en.a)(u, 2),
          o = i[0],
          c = i[1],
          s = Object(a.useRef)([]),
          f = Object(a.useRef)([]),
          l = Object(a.useState)([]),
          m = Object(en.a)(l, 2),
          d = m[0],
          h = m[1],
          p = Object(a.useState)([]),
          b = Object(en.a)(p, 2),
          y = b[0],
          v = b[1],
          g = Object(a.useState)(!1),
          T = Object(en.a)(g, 2),
          x = T[0],
          N = T[1],
          E = Object(a.useState)(
            parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(A)
            )
          ),
          w = Object(en.a)(E, 2),
          O = w[0],
          L = w[1],
          j = Object(a.useState)(!1),
          I = Object(en.a)(j, 2),
          S = I[0],
          k = I[1];
        return (
          Object(a.useEffect)(
            function () {
              x && (N(!1), Fe(r, o, s, d, f, v, O, k));
            },
            [x, r, o, d, O]
          ),
          Object($.jsxs)("div", {
            className: "home",
            children: [
              Object($.jsx)(Vn, {
                vizCallback: function () {
                  return N(!0);
                },
                setStmtIndex: t,
                sql: o,
                setSql: c,
                setTbls: h,
                setResTbl: v,
                frameDur: O,
                updateFrameDur: function (n) {
                  L(function (e) {
                    var r = n ? e + 50 : e - 50;
                    return (
                      r < 50 && (r = 50),
                      document.documentElement.style.setProperty(
                        A,
                        r + "ms"
                      ),
                      r
                    );
                  });
                },
                isVizRunning: S,
                setVizRunning: k,
              }),
              Object($.jsx)(Qn, {
                tbls: d,
                tblRefs: s,
                resTbls: y,
                resTblRefs: f,
              }),
            ],
          })
        );
      };
      r(75);
      var $n = function () {
        return Object($.jsx)("div", {
          className: "footer",
          children: Object($.jsxs)("footer", {
            children: [
              "Made with ❤️ by ",
              Object($.jsx)("a", {
                href: "https://kshitiztanwar.com",
                children: "Kshitiz Tanwar",
              }),
            ],
          }),
        });
      };
      r(76);
      var Jn = function () {
          return Object($.jsxs)("div", {
            className: "notFound",
            children: [
              Object($.jsx)("span", {
                children: "Sorry! ",
              }),
              "Could not find the page you're looking for.",
            ],
          });
        },
        tr = r(42),
        rr = r.n(tr),
        er = function () {
          var n = Object(f.e)(),
            e = Object(a.useState)(!1),
            r = Object(en.a)(e, 2),
            t = r[0],
            u = r[1];
          Object(a.useEffect)(function () {
            window.location.href.includes("localhost") ||
              rr.a.initialize("G-P9TME6EV4P"),
              u(!0);
          }, []),
            Object(a.useEffect)(
              function () {
                t && rr.a.pageview(n.pathname + n.search);
              },
              [t, n]
            );
        };
      r(80);
      var nr = function () {
        return (
          er(),
          Object($.jsxs)("div", {
            children: [
              Object($.jsx)(nn, {}),
              Object($.jsxs)(f.c, {
                children: [
                  Object($.jsx)(f.a, {
                    exact: !0,
                    path: "/",
                    element: Object($.jsx)(Zn, {}),
                  }),
                  Object($.jsx)(f.a, {
                    path: "*",
                    element: Object($.jsx)(Jn, {}),
                  }),
                ],
              }),
              Object($.jsx)($n, {}),
            ],
          })
        );
      };
      r(81), r(82);
      c.a.render(
        Object($.jsx)(i.a.StrictMode, {
          children: Object($.jsx)(s.a, {
            children: Object($.jsx)(nr, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[83, 1, 2]],
]);
