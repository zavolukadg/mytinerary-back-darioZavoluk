import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    //en postman podemos probar con localhost:8080/api/cities?city=B&sort=1
    console.log(req.query); //QUERY es un objeto con todas las consultas / igualdades a buscar en la base de datos
    //let objetoBusqueda = {country:"Argentina"};

    let objetoDeBusqueda = {}
    let objetoDeOrdenamiento = {}
    if (req.query.admin_id) {
      objetoDeBusqueda.admin_id = req.query.admin_id;
    }
    if (req.query.city) {
      objetoDeBusqueda.city = new RegExp('^' + req.query.city, 'i') 
    }
   /*  if (req.query.country) {
      objetoDeBusqueda.country = new RegExp('^' + req.query.country, 'i') 
    } */
    if (req.query.sort) {
      objetoDeOrdenamiento.city = req.query.sort; // se debe colocar el campo por que el queremos ordenar
    }

    let objetoDeBusqueda2 = {
      admin_id: "64d6431a79eaec9f71abe7ac"
    };
    //let allCities = await City.find(objetoBusqueda,'country city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
    //let allCities = await City.find().populate('admin_id','photo name mail -_id')
    //let allCities = await City.find({},'country city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
    //let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id','photo name mail')
    //let allCities = await City.find(req.query,'country city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
    //new RegExp(req.query.title,'i')

    let allCities = await City
      .find(objetoDeBusqueda, 'country city photo smalldescription admin_id')
      .populate('admin_id', 'photo name mail -_id')
      .sort(objetoDeOrdenamiento)
    if (allCities.length > 0) {
      return res.status(200).json({
        success: true,
        message: `${allCities.length} cities found`,
        response: allCities
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