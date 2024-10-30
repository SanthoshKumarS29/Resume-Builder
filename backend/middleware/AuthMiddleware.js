import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    console.log('Received Token', token)
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid Token Format' });
    }

    if(!token)
        return res.status(401).json({
            error:'No Token Provided'
    })

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_KEY);
        if (!decoded._id) {
            throw new Error("Token is missing user ID");
        }
        req.user = decoded
        next()
    } catch (error) {
        console.log('Token Verification error', error)
        res.status(401).json({
            error:"Invalid Token"
        })
    }
}

export default authMiddleware