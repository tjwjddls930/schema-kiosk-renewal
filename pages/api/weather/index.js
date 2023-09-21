

export default async function handler(req, res) {
        try{
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=36.63&lon=127.50&appid=${process.env.DEFAULT}`)
            .then(res => res.json())
            .then((data)=> data);
            // if(result.status === 200) {
            //     return{ success: true, data: await result.json()};
            // }
            // return { success: false, error: result.statusText};
            return res.status(200).json([result])
        } catch(err) {
            // return { success: false, error: err.message};
            res.status(500).json({message: "fetch failed"})
        }
};