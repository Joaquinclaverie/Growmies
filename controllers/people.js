const getAllData = require('../services/getAllDataService')

const validateSort = async (req, res) => {
    try {
        const { sortBy } = req.params
        const allPeople = await getAllData('people');

        const TYPES_OF_SORT = { 
            'name': () => 
                allPeople.sort((a,b) => {
                    let nameA = a.name.toLowerCase()
                    let nameB = b.name.toLowerCase();

                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                }),
            'height': () => 
                allPeople.sort((a,b) => {
                    let heightA = parseInt(a.height)
                    let heightB = parseInt(b.height);
                    if(isFinite(heightA - heightB)) {
                        return heightA - heightB; 
                    } else {
                        return isFinite(heightA) ? -1 : 1;
                    }
                }),
            'mass': () => 
                allPeople.sort((a,b) => {
                    let massA = parseInt(a.mass)
                    let massB = parseInt(b.mass);
                    if(isFinite(massA - massB)) {
                        return massA - massB; 
                    } else {
                        return isFinite(massA) ? -1 : 1;
                    }
                })
        }

        sortBy ?
            TYPES_OF_SORT[sortBy]
                ? res.send(TYPES_OF_SORT[sortBy]())
                : res.send(allPeople)
            :
            res.send(allPeople)

    } catch (err) {
        res.status(500).send({ errorMessage: err.message })
    }
}

module.exports = validateSort