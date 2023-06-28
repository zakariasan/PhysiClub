const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(

	{
		firstName:{
			type:String,
			required:true,
			min:2,
			max: 50,
		},
		lastName:{
			type:String,
			required:true,
			min:2,
			max:50,
		},
		email:{
			type:String,
			required:true,
			max:50,
			unique:true
		},
		password:{
			type:String,
			require:true,
			min:5,
		},
		role:{
			type:String,
			default:'Teacher',
	  enum: ['Teacher', 'Student'],

		}	
	},
	{timestamps:true}
)

module.exports = mongoose.model('user', UserSchema)
