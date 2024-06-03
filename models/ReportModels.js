import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    waktu_olahraga: {
      type: Date,
      required: true,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    jenis_olahraga: {
      type: String,
      required: true
    },
    repetisi_latihan_1: {
      type: Number,
      required: true,
      default: 0
    },
    repetisi_latihan_2: {
      type: Number,
      required: true,
      default: 0
    },
    repetisi_latihan_3: {
      type: Number,
      required: true,
      default: 0
    },
    jumlah_kalori: {
      type: Number,
      required: true,
      default: 0
    },
    HeartRate_tertinggi: {
      type: Number,
      required: true,
      default: 0
    }
  });
  
  const ReportModel = mongoose.model('Report', reportSchema);
  
  export default ReportModel;

