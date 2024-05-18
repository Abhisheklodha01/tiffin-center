import Attendance from '../models/attendance.model.js'

export const UpdateAttendanceController = async (req, res) => {
    const { status, userId } = req.body

    try {
        if (!status || !userId) {
            res.status(400).json({
                success: false,
                message: "All fields are required"
            })

        }

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;

        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;

        const AttendanceMessage = Attendance.create({
            userId,
            date: today,
            status
        })
        
        res.status(200).json({
            success: true,
            message: "Attendance updated successfully",
            AttendanceMessage
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
      
        const UserAttendance = await Attendance.find({userId})
        return res.status(200).json({
            success: true,
            message: "Attendance fetched successfully",
            UserAttendance
        })
    } catch (error) {
        console.log(error);
    }
}

export const GetUsersAttendanceController = async (req, res) => {
    try {
        const AllIUsersAttendance = await Attendance.find()
        return res.status(200).json({
            AllIUsersAttendance
        })
    } catch (error) {
     console.log(error);       
    }
}

export const UpdateAttendanceStatus = async (req, res) => {
       const {status, userId} = req.body 
       try {
        const updateStatus = await Attendance.findOne({userId})
        updateStatus.status = status
        const updatedStatus = await updateStatus.save()
        return res.status(200).json({
            message: "Attendance Edited successfully",
            updatedStatus
        })
       } catch (error) {
        console.log(error);
       }   
}