const express = require("express")
const router = express.Router()
const conn = require("./db")

const data = {}

router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories`
  //parent cats
  //find sub cats that have the same parent id that matches parent_id
  conn.query(sql, (err, results, fields) => {
    data.parent = results.filter(parent => parent.parent_id == null)

    data.parent.map(cat => {
      let child = results.filter(child => {
        if (cat.id === child.parent_id) {
          return child
        }
      })
      cat.child = child
    })

    res.json(data)
  })
})

router.post("/post", (req, res) => {
  const sql = `INSERT INTO post`
  const values = [req.body.id]

  conn.query(sql, values, (err, results, fields) => {
    res.send({
      title: "charlie",
      description: "murphy"
    })
  })
})

module.exports = router

// const express = require("express")
// const router = express.Router()
// const conn = require("./db")

// router.get("/categories", (req, res, next) => {
//   const sql = `SELECT * FROM categories`
//   //parent cats
//   //find sub cats that have the same parent id that matches parent_id

//   conn.query(sql, (err, results, fields) => {
//     const categories = results
//       .filter(cat => cat.parent_id == null)
//       .map(parent => {
//         return {
//           ...parent,
//           sub: results.filter(subcat => subcat.parent_id == parent.id)
//         }
//       })
//     res.json(categories)
//   })
// })
// module.exports = router
