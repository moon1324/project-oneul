import passport from "passport";

const authenticateToken = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "인증에 실패했습니다." });
        }
        if (!user) {
            return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
        }
        req.user = user; // 유저 정보를 요청 객체에 추가
        next();
    })(req, res, next);
};

export { authenticateToken };
