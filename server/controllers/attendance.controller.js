import Attendance from '../models/attendance.model.js'
import moment from 'moment/moment.js'

export const UpdateAttendanceController = async (req, res) => {
    const { status, userId } = req.body

    try {
        if (!status || !userId) {
            res.status(400).json({
                success: false,
                message: "All fields are required"
            })

        }

        const today = moment(new Date()).format('YYYY-MM-DD');

        const AttendanceMessage = await Attendance.create({
            userId,
            date: today,
            status
        })
        const date = AttendanceMessage.date.toLocaleDateString()
        const AttendanceDetails = {
            "date": date,
            "status": AttendanceMessage.status,
            userId
        }


        res.status(200).json({
            success: true,
            message: "Attendance updated successfully",
            AttendanceDetails
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}


export const UserAttendanceController = async (req, res) => {
    const userId = req.user._id
    try {
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "Please Login First"
            })
        }

        const UserAttendance = await Attendance.find({ userId })
            .select("-_id -createdAt -updatedAt -__v -userId")
        return res.status(200).json({
            success: true,
            message: "Attendance fetched successfully",
            userId,
            UserAttendance
        })
    } catch (error) {
        console.log(error);
    }
}

export const GetUsersAttendanceController = async (req, res) => {
    try {
        const AllIUsersAttendance = await Attendance.find()
            .select("-_id -createdAt -updatedAt -__v")
        return res.status(200).json({
            AllIUsersAttendance
        })
    } catch (error) {
        console.log(error);
    }
}

export const UpdateAttendanceStatus = async (req, res) => {
    const { status, userId } = req.body
    try {
        const updateStatus = await Attendance.findOne({ userId })
        const date = updateStatus.date.toLocaleDateString()
        updateStatus.status = status
        const updatedStatus = await updateStatus.save()
        const UpdatedAttendanceDetails = {
            "date": date,
            "status": updatedStatus.status,
            userId
        }
        return res.status(200).json({
            message: "Attendance Edited successfully",
            UpdatedAttendanceDetails
        })
    } catch (error) {
        console.log(error);
    }
}