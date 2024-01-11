const Test = require('../Models/test.model')
const addData = async (req, res) => {
    try {
        // Kiểm tra và xử lý dữ liệu từ request
        const { name } = req.body;

        // Thêm dữ liệu vào cơ sở dữ liệu
        const test = await Test.create({ name });

        res.json({ message: 'Dữ liệu đã được thêm thành công', Test });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Có lỗi xảy ra khi thêm dữ liệu' });
    }
};

module.exports = { addData };