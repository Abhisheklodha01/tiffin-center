import mongoose, { Schema, model } from 'mongoose'

const attendanceSchema = new Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent'
    },


}, { timestamps: true })

const Attendance = model("Attendance", attendanceSchema)
export default Attendance