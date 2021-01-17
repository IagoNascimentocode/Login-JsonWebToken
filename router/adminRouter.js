const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/',auth, (req,res)=>{
    if(req.user.admin){
        res.send("Essa menssagem é restrita a quem tem permissão admin.")

    }else{
        res.status(401).send("Not admin: Access Denied")
    }
})
router.get('/free', auth , (req,res)=>{
    res.send("Essa msg aparece para usuarios logados")
})

module.exports = router;