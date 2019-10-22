const User = require('../models/User');

exports.showSignup = (req, res) => {
    // console.log('show signup', req.body);
    res.render('signup');
};

exports.doSignup = (req, res) => {

    console.log('inside do', req.body);
    if (req.body) {
        var email = req.body.email,
            age = req.body.age;
        var user = new User({
            email: email,
            age: age
        });
        User.findOne({email:email}, (err, existingUser) => {
            if (err) {
                res.send('could not find user');
            }
            else if (existingUser) {
                res.send('user already exists');
            }
            else {
                user.save((saveErr, saveSuccess) => {
                    if (saveErr) {
                        res.send('could not create user')
                    }
                    console.log('user created successfully', saveSuccess)
                    var result = 'user created successfully:' + saveSuccess;
                    res.send(result)
                })
            }
            
        })
    }
    else {
        res.send('provide input');
    }
};

