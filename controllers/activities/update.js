import Activity from "../../models/Activity.js";
export default async (req, res) => {
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(
            req.params.u_id,
            req.body, {new: true} 
        ).select('country city descripcion')
        if (updatedActivity) {
            return res.status(200).json({
                success: true,
                message: 'activity updated',
                response: updatedActivity
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}