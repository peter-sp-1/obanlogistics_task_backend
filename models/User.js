const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //For the Account Creation
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    //For the User Profile
    name: { type: String, default: '' },
    role: { type: String, default: '' },
    teamSize: { type:String, default: 'Just me' },

    //For the Workspace Creation
    workspaceName: { type: String, default: '' },
    invitedEmails: { type: [String], default: [] },

    //For the Focus 
    focus: { type: String, default: '' },

    //For the Dashboard
    plan: { type: String, default: 'Free' },
    status: { type: String, default: 'Active' },  
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);