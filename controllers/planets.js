const getAllData = require('../services/getAllDataService')

const replaceData = async (req, res) => {
    try {
        const allPlanets = await getAllData('planets');
        const allPeople = await getAllData('people');
        let peopleUrlsAndName = []

        allPeople.forEach(people => {
            let urlAndName = {
                url: people.url,
                name: people.name
            }
            peopleUrlsAndName.push(urlAndName)
        })

        allPlanets.forEach((planets => {
            planets.residents.forEach(element => {
                let dataForReplace = peopleUrlsAndName.find(people => people.url === element) 
                if (element === dataForReplace.url) {
                    planets.residents[planets.residents.indexOf(element)] = dataForReplace.name
                }
            })
        }))

        res.send(allPlanets)
        
    } catch (err) {
        res.status(500).send({ errorMessage: err.message })
    }
}

module.exports = replaceData