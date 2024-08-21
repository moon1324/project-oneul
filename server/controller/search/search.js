import OurToday from "../../models/ourTodaySchema.js";

const searchKeyword = async (req, res) => {
    const { value } = req.query;
    if (!value) {
        return res.status(400).json({ message: "Search value is required" });
    }

    // const userEmail = req.user.email;
    // console.log(userEmail);

    try {
        // const myMindResults = await MyMind.find({
        //     userEmail: userEmail,
        //     questions: { $regex: value, $options: "i" },
        // });

        const ourTodayResults = await OurToday.find({
            content: { $regex: value, $options: "i" },
        });

        // res.json({ myMindResults, ourTodayResults });
        res.json(ourTodayResults);
    } catch (error) {
        res.status(500).json({ message: "Failed to search", error });
    }
};

export { searchKeyword };
