"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const crowller_1 = __importDefault(require("./utils/crowller"));
const analyzer_1 = __importDefault(require("./utils/analyzer"));
const utils_1 = require("./utils/utils");
const checkLogin = (req, res, next) => {
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json((0, utils_1.getResponseData)(null, '请先登录'));
    }
};
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
    res.json((0, utils_1.getResponseData)(true));
});
router.post('/login', (req, res) => {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.json((0, utils_1.getResponseData)(false, '已经登录过了'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json((0, utils_1.getResponseData)(true));
        }
        else {
            res.json((0, utils_1.getResponseData)(false, '登录失败'));
        }
    }
});
router.get('/getData', checkLogin, (req, res) => {
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = analyzer_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.json((0, utils_1.getResponseData)(true));
});
router.get('/showData', checkLogin, (req, res) => {
    try {
        const position = path_1.default.resolve(__dirname, '../data/course.json');
        const result = fs_1.default.readFileSync(position, 'utf-8');
        res.json((0, utils_1.getResponseData)(JSON.parse(result)));
    }
    catch (err) {
        res.json((0, utils_1.getResponseData)(false, '数据不存在'));
    }
});
exports.default = router;
