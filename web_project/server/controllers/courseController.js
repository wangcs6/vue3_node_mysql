const db = require('../config/db')


/**
 * 课程查询接口逻辑
 */
exports.listVideo = (req,res) => {
    let {category,page,size} = req.query
    page = (page -1 ) * size
    let pageSql = 'select * from video where del = 0 and category=? order by id limit ?,?' //通过id排序

    let totalSql = 'Select count(*) as total from video where del = 0 and category=?'

    db.query(pageSql,[category,Number(page),Number(size)],(err,resPage) => {
        if (err) {
            return res.send({code:1,message:err.message})
        }
        db.query(totalSql,[category],(err,resTotal) => {
            if (err) {
                return res.send({code:1,message:err.message})
            }
            res.send({
                code:0,
                data:{
                    total: resTotal[0].total,
                    list: resPage,
                }
            })
        })
    })
}


/**
 * 课程修改接口逻辑
 */

exports.updateVideoById = (req,res) => {
    res.send('修改成功')
}