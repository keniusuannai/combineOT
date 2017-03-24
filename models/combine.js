const sequelize = require('../util/db');

let Combine = sequelize.define('combine', {
    cid: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "uid, 主键, 自增"
    },
    uid: {
        type: sequelize.INTEGER,
        comment: "uid"
    },
    nick: {
        type: sequelize.STRING(100),
        allowNull: false,
        comment: "用户名"
    },
    branch: {
        type: sequelize.STRING(200),
        allowNull: false,
        comment: "分支"
    },
    status: {
        type: sequelize.INTEGER,
        defaultValue: 0,
        mark: '未处理',
        comment: "状态"
    }
});

// 强制同步table和models
// Combine.sync({force: true});

module.exports = Combine;