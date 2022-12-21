const joi = require('joi');

const bookValidateMiddleware = async(req, res, next) => {
    const bookPlayload = req.body

    try {
        await bookValidator.validateAsync(bookPlayload);
        next();
    } catch (error) {
        console.log(error)
        res.status(406).send(error.details[0].message)
    }
}

const bookValidator = joi.object({
    title: joi.string()
        .min(5)
        .max(255)
        .required(),

    year: joi.number()
        .min(1900)
        .max(2022),

    isbn: joi.string()
        .min(10)
        .max(13)
        .required(),

    createdAt: joi.date()
        .default(Date.now()),

    updatedAt: joi.date()
        .default(Date.now())
    
})

module.exports = bookValidateMiddleware