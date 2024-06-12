import User from "../../models/userSchema.js";

const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        // 사용자가 잘못된 인증을 요청한 401코드
        return res.status(401).json({
            loginSuccess: false,
            message: "존재하지 않는 이메일입니다.",
        });
    } else {
        // 비밀번호가 맞는지 확인
        const passwordMatch = req.body.password === user.password;
        if (!passwordMatch) {
            return res.status(401).json({
                loginSuccess: false,
                message: "비밀번호를 확인해주세요.",
            });
        }

        const { ...userDatas } = user;
        const { password, ...others } = userDatas._doc;
        console.log(others);

        return res.status(200).json({
            user: others, // 최초 로그인시 유저정보
            loginSuccess: true, // 상태
            message: "로그인 성공!", // 메세지
        });
    }
};
const registerUser = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        // 중복 회원가입 요청 발생 시 409 코드
        return res.status(409).json({
            registerSuccess: false,
            message: "이미 존재하는 이메일입니다",
        });
    } else {
        // 유저를 파싱
        let register = {
            email: req.body.email,
            password: req.body.password,
        };
        // 유저를 등록
        await User.create(register);
        return res.status(200).json({
            registerSuccess: true,
            message: "회원가입이 완료 되었습니다",
        });
    }
};

const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export { loginUser, registerUser, updateUser, deleteUser };
