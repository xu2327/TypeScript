"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crowller_1 = __importDefault(require("./crowller"));
const dellAnalyzer_1 = __importDefault(require("./dellAnalyzer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send(`
        <html>
            <body>
                <a href="/getData">爬取内容</a>
                <a href="/showData">展示内容</a>
                <a href="/logout">退出</a>
            </body>
        </html>
    `);
    }
    else {
        res.send(`
        <html>
            <body>
                <form method="post" action="/login">
                    <input type="password" name="password" />
                    <button>登陆</button>
                </form>
            </body>
        </html>
    `);
    }
});
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
router.post('/login', (req, res) => {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send('已经登录过了');
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.send('登陆成功');
        }
        else {
            res.send('登录失败');
        }
    }
});
router.get('/getData', (req, res) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const analyzer = dellAnalyzer_1.default.getInstance();
        new crowller_1.default(url, analyzer);
        res.send('getData Success');
    }
    else {
        res.send('请先登录后爬取内容');
    }
});
router.get('/showData', (req, res) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        try {
            const position = path_1.default.resolve(__dirname, '../data/course.json');
            const result = fs_1.default.readFileSync(position, 'utf-8');
            res.json(JSON.parse(result));
        }
        catch (err) {
            res.send('尚未爬取到内容');
        }
    }
    else {
        res.send('用户尚未登录');
    }
});
exports.default = router;
