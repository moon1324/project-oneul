import express from "express";
import session from 'express-session'
import connect from "./connect/connect.js";
import bodyParser from "body-parser";
import cors from "cors";
import rootRouter from "./routes/rootRouter.js";
import dotenv from "dotenv";
import passport from "passport";
import { initializePassport } from "./auth/auth.js";
import morgan from 'morgan';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';

// .env 파일에서 환경변수 불러오기
dotenv.config();
const { PORT } = process.env;

const SECRET_KEY = process.env.SECRET_KEY;

// MongoDB 연결
connect();

const app = express();
const port = PORT || 8000;

// bodyparser
app.use(bodyParser.json());
// app.use(express.json())

//서버에서 CORS 헤더를 직접 설정
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// cors 설정
// app.use() : 미들웨어로서, 어떤 요청이든 지정된 로직보다 먼저 작업한다, 즉 전처리이다.
// yarn add cors 필요
app.use(express.urlencoded({ extended: false}));
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);

//로그아웃 미들웨어 설정
app.use(session({
    secret: SECRET_KEY, 
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true,
        httpOnly: true,
        samSite : 'lax'
    } 
}));

app.use(morgan('dev')); // 개발 환경에서 간단한 포맷 사용

// 라우트 설정
app.get('/user', (req, res) => {
  console.log('GET /user 요청 수신');
  // 로직 처리
  res.send('사용자 정보');
});

// passport 로직 추가
app.use(passport.initialize());
initializePassport();

// 정적 파일 제공
app.use("/images", express.static("images"));


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
};

passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
}));

// Local Strategy 설정
passport.use(new LocalStrategy({
    usernameField: 'email', // 사용자명 필드 (기본값은 'username')
    passwordField: 'password', // 비밀번호 필드 (기본값은 'password')
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }

        const isValidPassword = await user.isValidPassword(password);

        if (!isValidPassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

app.use(passport.initialize());

// 라우팅 처리
app.use("/", rootRouter);

// 서버 실행 함수
const startServer = () => {
    try {
      initializePassport();
      const PORT = 8000;
      app.listen(PORT, () => {
        console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
      });
    } catch (err) {
      console.error('서버 실행 중 오류 발생:', err);
    }
  };
  
  // 서버 실행
  startServer();