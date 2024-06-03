import Report from "./../models/ReportModels.js";

export const TambahData = async (req, res) => {
    try {
        console.log("Request body:", req.body); // Logging request body

        const newReport = await Report.create(req.body);

        console.log("New report created:", newReport); // Logging new report

        return res.status(201).json({
            status: "Success",
            data: newReport
        });
    } catch (error) {
        console.error("Error creating report:", error); // Logging error

        res.status(400).json({
            status: 'fail',
            message: error.message || error.errors
        });
    }
};

export const TampilReport = async (req, res) => {
    try {
        const reports = await Report.find();

        return res.status(200).json({
            status: "Success",
            data: reports
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

export const ListReportbyUsername = async (req, res) => {
    try {
        const { username } = req.params; // Dapatkan nilai parameter username dari URL
        const reports = await Report.find({ username: username }); // Cari laporan berdasarkan username

        return res.status(200).json({
            status: "Success",
            data: reports
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};
