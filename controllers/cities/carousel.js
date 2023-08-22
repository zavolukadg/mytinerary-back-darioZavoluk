import City from "../../models/City.js";

export default async(req,res,next) =>{
    try {
        let carouselCities = await City
        .find({},'photo city')
        .sort({fundation:'desc'}) //tambien se podria usar fundation:-1
        .limit(12)
        let count = await City.countDocuments()
        return res.status(200).json({
            success: true,
            message:'cities to show on carousel',
            data_carousel: carouselCities,
            count  //igual a poner count: count
        })
    } catch (error) {
        next(error);
    }
}