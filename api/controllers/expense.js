const Expense = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    try {
        // Parse date string
        const parsedDate = new Date(Date.parse(date));

        const expense = new Expense({
            title,
            amount,
            category,
            description,
            date: parsedDate
        });

        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required!" });
        }
        if (amount <= 0 || isNaN(amount)) { // Check for non-negative and NaN
            return res.status(400).json({ message: "Amount must be a positive number!" });
        }
       

        await expense.save();
        res.status(200).json({ message: "Expense Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        await Expense.findByIdAndDelete(id);
        res.status(200).json({ message: "Expense Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
