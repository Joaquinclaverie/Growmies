const axios = require('axios')

const getAllData = async (type) => {
    try {
        let nextPage = `https://swapi.dev/api/${type}/`
        let allData = []

        while (nextPage) {
            const apiResponse = await axios.get(nextPage)
            const { next, results } = await apiResponse.data
            nextPage = next
            allData = [...allData, ...results]
        }

        return allData
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = getAllData