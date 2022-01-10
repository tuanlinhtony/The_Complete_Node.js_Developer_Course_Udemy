const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'



sgMail.setApiKey(sendgridAPIKey)
sgMail.send({
    to: 'tonyvnpsp12@gmail.com',
    from: 'tuanlinhtony@outlook.com',
    subject:'This is my first creation',
    text: 'I am testing sendgrid'    
})

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'tuanlinhtony@outlook.com',
//         subject: 'Thanks for joining in!',
//         text: 'Welcome to the app,' + name + '. Let me khow how you get along with the app'
//     })
// }

// module.exports = { 
//     sendWelcomeEmail
//  }