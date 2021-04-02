import mongoose from 'mongoose'


const otpSchema=new mongoose.Schema({
    //   createdAt: { type: Date, expires: '3m',  default: Date.now },
        otp:{
            type:Number,
            required:true
        }       
    },{timestamps: true})
    otpSchema.index( { "lastModifiedDate": 1 }, { expireAfterSeconds: 3600 } )

    const OTP = mongoose.model('OTP',otpSchema);
    export default OTP;

