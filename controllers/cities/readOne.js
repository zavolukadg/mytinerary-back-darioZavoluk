import City from "../../models/City.js";

export default async (req, res, next)=> {
    try {
      let oneCity = await City.findOne({_id:req.params.id})
      .select("country fundation population photo city description smalldescription featuredLocation -_id")
      .populate('admin_id', 'photo name mail -_id')
      //let oneUserId = await User.findById({req.params.id}) 
      if (oneCity) {
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCity
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