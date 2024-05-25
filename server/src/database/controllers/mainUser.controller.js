export const test = async (req, res, next) => {
    console.log(req.user)
    console.log(req.user.userId)
    res.json({message: 'nice'});
};