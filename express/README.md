# express

DRY PRINCIPLE

Dont Repeat Yourself

SoC PRINCIPLE

Seperation of Concern

MVC Pattern
Model View(API) Controller

// Typical Features

1. App run
2. Error Handling
3. DB connection
4. Env variable
5. API versioning
6. Services (gmail,google recaptcha)
7. Utils
8. Validation
9. Logging
10. File uploading

// Advanced Concepts

1. Aggregation
2. Pagination
3. Advanced Logging
4. Rate Limiting

Nesting of Callbacks is called Callback Hell
Express handled Callback Hell by introducing the next() function

### User Signup

- API Endpoint (msg: User signup successfully)(/register)
- userController.register()
- register controller

1. email, password check
2. create bcrypt utility file (genHash, compareHash)
3. payload.password = genHash(password)
4. userModel.create(payload)
5. email signup (email notification)

### user login

- APi endpoint (/login)
- userController.login()
- login controller

1. email exist; isActive: true
2. check email verification of user
3. email not verified , throw error
4. compare password hash with user password
5. if invalid, throw error
6. return true

### Email Token Generation

- API (/generate-email-token)

1. email exist; isActive: true
2. use crypto util, to create otp (truly random otp)
3. if not verified, generate otp
4. Store the otp in the user database
5. email that otp

### Email Token Verification

- API (/verify-email-token)

1. email exist; isActive: true
2. compare otp
3. if verified, update user database with isEmailVerified: true, otp: ""
4. else Token invalid
