Users = new Mongo.Collection("users");
// Users.attachSchema(new SimpleSchema({
//     name: {
//         type: String,
//         label: "Name",
//         max: 50
//     },
//     age: {
//         type: Number,
//         label: "Age"
//     },
//     organization: {
//         type: String,
//         label: "Organization",
//         optional: true
//     },
//     summary: {
//         type: String,
//         label: "Brief summary",
//         optional: true,
//         max: 1000
//     }
// }, { tracker: Tracker }));